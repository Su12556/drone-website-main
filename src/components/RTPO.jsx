import React, { useState } from "react";
import "../style/page2/allSectionP2.css";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import BreadcrumpTemp from "./Template/BreadcrumpTemp";
import Section4 from "./Section4.jsx";

export default function RTPO() {
  const [ans0, setAns0] = useState(true);
  const [ans1, setAns1] = useState(false);
  const [ans2, setAns2] = useState(false);

  const breadProp = {
    title: "Remote Pilot Training Organisation",
    text: "Learn the art of flying drones and turn your passion into a profession.",
    arr: ["Home", "RPTO"],
  };
  const props = {
    img: "s4.jpg",
    title: "Remote Pilot Training Organisation",
    text1:
      "Welcome to Vama Skylight, where innovation takes flight! As a premier Remote Pilot Training organization, we are dedicated to shaping the future of unmanned aerial systems. Explore the skies with confidence and expertise through our comprehensive training programs designed to elevate your skills and meet the demands of the rapidly evolving drone industry.",
  };

  return (
    <div>
      <BreadcrumpTemp bprops={breadProp} />
      <div className="all-section-p">
        <div className="asp-left">
          <div className="prod-img">
            <img
              src={require(`../img/Carousel/${props.img}`)}
              alt="drone-footage"
            />
          </div>
          <div className="sec2-prod-left">
            <h1>{props.title}</h1>
            <p>{props.text1}</p>
          </div>

          <div className="s4p-inner">
            {/* {props.text2 ? <p>{props.text2}</p> : ""} */}

            {/* <div
              className={
                props.img3 === "" ? "s4p-img-cnt single" : "s4p-img-cnt"
              }
            >
              {props.img3 === "" ? (
                <>
                  <img
                    src={require(`../../img/Service-Product/${props.img2}`)}
                    alt=""
                  />
                </>
              ) : (
                <>
                  <img src={props.img2} alt="" />
                  <img src={props.img2} alt="" />
                </>
              )}
            </div> */}
          </div>
        </div>
        <div className="asp-right">
          <div className="asp-right-2">
            <div className="sec2-prod-right">
              {/* <div className="sec2-prod-right-inner">
                <span className="tele-icon">
                  <i class="fa-solid fa-phone"></i>
                </span>
                <div>
                  <p>Have you any Questions?</p>
                  <p>
                    Call us <span className="ylo">Today!</span>
                  </p>
                </div>
                <div className="dotted-line"></div>
                <p className="call-num">
                  <a href="tel:+91-8320844583">+91-8320844583</a>
                </p>
              </div> */}
            </div>
            <div className="sec3-p-right">
              {/* <h2>Brochure</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Exercitationem sit ipsa qui commodi numquam.
              </p> */}
              {/* <div className="s3p-btn-cnt">
                <button>Download</button>
                <span>Or</span>
                <button>Discover</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Section4 />
      <div className="faqs  shadow">
        <h2>Frequently Asked Questions </h2>
        <p>
          We have compiled answers of commonly asked questions regarding Remote
          Pilot Training Organisation (RTPO).
        </p>
        <div className="faq-inner">
          <div className="py-2">
            <h3
              className="my-3"
              onClick={() => {
                setAns0(!ans0);
              }}
            >
              Q: What is UIN?
            </h3>
            {ans0 && (
              <p>
                UIN can be abbreviated as “Unique Identification Number “and is
                issued for registering an unmanned aircraft system in India.
              </p>
            )}
          </div>
          <div className="py-2">
            <h3
              className="my-3"
              onClick={() => {
                setAns1(!ans1);
              }}
            >
              Q: What is DAN?
            </h3>
            {ans1 && (
              <p>
                “Drone acknowledgement number” means the unique number issued by
                the digital sky platform under the voluntary disclosure scheme
                for unmanned aircraft systems in India
              </p>
            )}
          </div>
          <div className="py-2">
            <h3
              className="my-3"
              onClick={() => {
                setAns2(!ans2);
              }}
            >
              Q: I have a self assembled Drone. How can I obtain the UIN for
              that?
            </h3>
            {ans2 && (
              <p>
                For self assembled drones with all up weight not exceeding 25
                Kg, organisations can now apply for UIN under ‘Model’
                subcategory, subject to compliance with Drone Rules, 2021. This
                does not need a Type Certificate or a DAN.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
