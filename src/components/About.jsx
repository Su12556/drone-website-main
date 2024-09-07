import React from "react";
import "../style/about.css";

import BreadcrumpTemp from "./Template/BreadcrumpTemp";
import Section1 from "./Section1";
import Section2_p from "./page2/Section2_p";
import Section3 from "./Section3";
import telescope from "../img/telescope.jpg";

import TestimonialCard from "./TestimonialCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../style/testimonial.css";

export default function About() {
  const breadProp = {
    title: "About Us",
    text: "Join us in building a resilient future with the help of cutting-edge drone technology",
    arr: ["Home", "About Us"],
  };

  const NiteshMundra = {
    photo: "https://www.dronekrishi.com/assets/images/profile/nitesh_p.png",
    name: "Nitesh Mundhra",
    designation: "Director and Drone Pilot",
    para: "Nitesh Mundhra's educational background in BBA with a specialization in analytics provides a strong foundation in business administration and data analysis. ",
  };
  const nikunjBajoria = {
    photo: "https://www.bhphotovideo.com/images/images1500x1500/dji_cp_hy_00000087_01_zxt2_640_x_512_1410655.jpg",
    name: "Nikunj Bajoria",
    designation: "Director & co-founder",
    para: "Nikunj Bajoria is a dynamic individual who, at the age of 30, has gained extensive experience in the business world, ranging from trading to manufacturing.",
  };
  const ankurSomani = {
    photo: "https://www.dronekrishi.com/assets/images/profile/Ankur_p.png",
    name: "Ankur Somani",
    designation: "Director and Drone pilot Instructor",
    para: "Ankur Somani is a highly skilled professional with a diverse range of qualifications and experience. Holding a bachelor's degree in commerce (Bcom) and a master's degree in business administration (MBA).",
  };

  return (
    <div className="about">
      <BreadcrumpTemp bprops={breadProp} />
      <div className="about-inner">
        <Section1 />
        <Section2_p />

        <div className="new-vision">
          <div className="v-box">
            <img src={telescope} alt="img" />
            <i className="v-arrow fa-solid fa-chevron-down"></i>
            <div className="vision-t">
              <p className="v-text">1</p>
              <div className="vision">MISSION</div>
            </div>
            <div className="v-hr"></div>
            <div className="vt-2">
              To utilize the opportunity that the limitless sky offers by
              creating a technology-driven organization.
            </div>
          </div>
          <div className="v-box">
            <img src={telescope} alt="img" />
            <i className="v-arrow fa-solid fa-chevron-down"></i>
            <div className="vision-t">
              <p className="v-text">2</p>
              <div className="vision">VISION</div>
            </div>
            <div className="v-hr"></div>
            <div className="vt-2">
              To redefine the sky and make it accessible to businesses and
              organizations of all sizes.
            </div>
          </div>
          {/* <div className="v-box">
            <img src={telescope} alt="img" />
            <i className="v-arrow fa-solid fa-chevron-down"></i>
            <div className="vision-t">
              <p className="v-text">3</p>
              <div className="vision">VALUES</div>
            </div>
            <div className="v-hr"></div>
            <div className="vt-2">
              
              
              We are committed to delivering high-quality products and services
              that meet the needs of our clients.
            </div>
          </div> */}
        </div>
        <div className="our-team">
  <div className="test-top">
    <div className="dual-line">
      <div className="line1 "></div>
      <h2>Our Team</h2>
      <div className="line1 "></div>
    </div>
  </div>

  <div className="carousel-testimonial">
    <div className="team-row">
      <div className="image">
        <TestimonialCard details={ankurSomani} />
      </div>
      <div className="image">
        <TestimonialCard details={NiteshMundra} />
      </div>
      <div className="image">
        <TestimonialCard details={nikunjBajoria} />
      </div>
    </div>
  </div>
</div>


        <div className="history-container">
          <div className="history">
            <h2>Our History</h2>
            <h3>2022</h3>
            <hr></hr>
            <p>
              Vama Skylight LLP was founded in 2022 by a team of engineers and
              drone enthusiasts who saw the potential for UAVs to transform
              industries. Since then, we have grown into a leading UAV company
              in India, with a purpose of delivering reliable, high-quality
              products and services to our clients.
            </p>
          </div>

          <div className="history">
            <h2>Our Values</h2>
            <hr></hr>
            <p>
              At Vama Skylight LLP, we value innovation, reliability, and
              customer satisfaction. We are committed to delivering high-quality
              products and services that meet the needs of our clients.
            </p>
            <p>
              At Vama Skylight, we are committed to providing our clients with
              high-quality UAV solutions and outstanding customer service. we
              are constantly pushing the boundaries of what is possible with UAV
              technology. Contact us today to learn more about our products and
              services!
            </p>
          </div>
        </div>

        <Section3 />

          {/* WhatsApp Icon */}
      <a
        href="https://wa.me/9604299533" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-icon"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      <style jsx>{`
        .whatsapp-icon {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #25D366;
          color: white;
          padding: 20px; 
          border-radius: 20%; 
          font-size: 15px;
          text-align: center;
          cursor: pointer;
          z-index: 1000; 
          box-shadow: 0 0 12px rgba(0, 0, 0, 0.2); 
        }

        .whatsapp-icon:hover {
          background-color: #128C7E; /* Darker green on hover */
           font-size: 30px;
        }
      `}</style>
      </div>
    </div>
  );
}
