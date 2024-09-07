import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CareerForm = () => {
  const form = useRef();
  const [fileName, setFileName] = useState("");
  const [formErrors, setFormErrors] = useState({});

  // Function to send the form email
  const sendEmail = (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      emailjs
        .sendForm(
          "service_v9abb6e",
          "template_4220w3j",
          form.current,
          "AItScZlyId8-XGf9V"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Form submitted successfully!", {
              position: "top-right",
              autoClose: 3000,
            });
            form.current.reset();  // Reset form after submission
            setFileName("");  // Reset file name
          },
          (error) => {
            console.log(error.text);
            toast.error("Form submission failed. Try again.", {
              position: "top-right",
              autoClose: 3000,
            });
          }
        );
    } else {
      setFormErrors(errors);
    }
  };

  // Validation function
  const validateForm = () => {
    const errors = {};
    const formData = new FormData(form.current);
    
    if (!formData.get("user_name")) errors.name = "Name is required";
    if (!formData.get("user_email")) errors.email = "Email is required";
    if (!formData.get("user_phone")) errors.phone = "Phone number is required";
    if (!formData.get("user_position")) errors.position = "Position is required";
    if (!formData.get("user_resume")) errors.resume = "Resume is required";
    
    return errors;
  };

  // Handle file upload and set file name
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  // Remove selected file
  const handleFileRemove = () => {
    setFileName("");
    document.getElementById("myfile").value = ""; // Clear the input field
  };

  return (
    <StyledCareerForm>
      <form ref={form} className="career-form" onSubmit={sendEmail}>
        <input
          type="text"
          id="name"
          name="user_name"
          placeholder="Your Name"
        />
        {formErrors.name && <Error>{formErrors.name}</Error>}
        
        <input
          type="email"
          id="email"
          name="user_email"
          placeholder="Your Email"
        />
        {formErrors.email && <Error>{formErrors.email}</Error>}

        <input
          type="text"
          id="PhoneNumber"
          name="user_phone"
          placeholder="Your Phone Number"
        />
        {formErrors.phone && <Error>{formErrors.phone}</Error>}

        <input
          type="text"
          id="Position"
          name="user_position"
          placeholder="Your Position"
        />
        {formErrors.position && <Error>{formErrors.position}</Error>}

        <div className="career-file">
          <label htmlFor="myfile" className="custom-file-upload">
            <i className="fa fa-cloud-upload"></i> Upload Resume
          </label>
          <input
            type="file"
            id="myfile"
            name="user_resume"
            onChange={handleFileChange}
          />
          {fileName && (
            <div className="file-info">
              <span className="file-name">{fileName}</span>
              <button type="button" className="file-remove" onClick={handleFileRemove}>×</button>
            </div>
          )}
        </div>
        {formErrors.resume && <Error>{formErrors.resume}</Error>}

        <button type="submit">Submit Now</button>
      </form>

      <ToastContainer />
    </StyledCareerForm>
  );
};

export default CareerForm;

// Styled Components
const StyledCareerForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      margin-bottom: 1rem;

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    .career-file {
      display: flex;
      align-items: center;

      .custom-file-upload {
        display: inline-block;
        padding: 6px 12px;
        cursor: pointer;
        background-color: rgb(249, 105, 14);
        color: white;
        border-radius: 5px;
        margin-right: 1rem;
      }

      .file-info {
        display: flex;
        align-items: center;

        .file-name {
          margin-left: 1rem;
          font-size: 14px;
        }

        .file-remove {
          margin-left: 0.5rem;
          background: none;
          border: none;
          color: rgb(249, 105, 14);
          font-size: 20px;
          cursor: pointer;
        }
      }

      input[type="file"] {
        display: none;
      }
    }

    button {
      margin-top: 1rem;
      padding: 10px 20px;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
      cursor: pointer;
      border-radius: 5px;
    }
  }
`;

const Error = styled.div`
  color: red;
  font-size: 12px;
  margin-bottom: 1rem;
`;
