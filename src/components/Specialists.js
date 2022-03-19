import React from "react";

/* self imports */
import specialist1Img from "../assets/specialist1.jpg";
import specialist2Img from "../assets/specialist2.jpg";
import specialist3Img from "../assets/specialist3.jpg";
import specialist4Img from "../assets/specialist4.jpg";

const SpecialistCard = (props) => {
  const { img, name, job } = props;

  return (
    <article>
      <div className="specialist__image">
        <img src={img} alt={name} />
      </div>
      <div className="specialist__details">
        <h4>{name}</h4>
        <small>{job}</small>
      </div>
      <div className="specialist__socials">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <i className="bx bxl-twitter"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <i className="bx bxl-facebook"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <i className="bx bxl-instagram"></i>
        </a>
      </div>
      <div className="specialist__whatsapp">
        <a
          href="https://api.whatsapp.com/send?phone="
          target="_blank"
          rel="noreferrer"
        >
          <i className="bx bxl-whatsapp"></i>
        </a>
      </div>
    </article>
  );
};

const Specialists = ({
  specialistCardInfos = [
    {
      img: specialist1Img,
      name: "Dr.Kwadjo Nkansa",
      job: "Surgery Specialist",
    },
    {
      img: specialist2Img,
      name: "Dr.James Howard",
      job: "Anaesthetic Specialist",
    },
    {
      img: specialist3Img,
      name: "Dr.George Apedo",
      job: "Orthopedic Specialist",
    },
    {
      img: specialist4Img,
      name: "Dr.Lisa Brown",
      job: "Cardiology Specialist",
    },
  ],
}) => {
  const specialistCardItems = specialistCardInfos.map((info) => (
    <SpecialistCard key={info.name} {...info} />
  ));

  return (
    <section id="specialists">
      <h2>Our Top Specialists</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="container">{specialistCardItems}</div>
    </section>
  );
};

export default Specialists;
