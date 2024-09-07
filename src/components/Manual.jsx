import React from "react";

const Manual = () => {
  return (
    <div className="download-button" style={{ marginTop: "10px" }}>
      <div className="modal-images-column">
        <img
          src="/DGCA TYPE CERTIFIED-01.jpg"
          alt="DGCA Type Certified"
          className="modal-image"
        />
        <img
          src="/Tc with Frame-01.jpg"
          alt="TC Image"
          className="modal-image"
        />
      </div>
      <a href="/manual.pdf" download>
        <button
          className="btn-download"
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Download Manual
        </button>
      </a>
    </div>
  );
};

export default Manual;
