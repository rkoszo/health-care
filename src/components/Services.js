import React from "react";

const ServiceCard = (props) => {
  const { icon, title, description } = props;

  return (
    <article>
      <i className={icon}></i>
      <div>
        <h4>{title}</h4>
        <small>{description}</small>
      </div>
    </article>
  );
};

const Services = ({
  cardInfo = [
    {
      icon: "bx bx-book-content",
      title: "Online Booking",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: "bx bx-trophy",
      title: "Qualified Doctors",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: "bx bx-support",
      title: "Private Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: "bx bx-donate-heart",
      title: "Well Cared",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: "bx bx-first-aid",
      title: "Need Emergency",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: "bx bxl-meta",
      title: "24 Hour Service",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
}) => {
  const cardItems = cardInfo.map((info) => (
    <ServiceCard key={info.title} {...info} />
  ));

  return (
    <section>
      <h2>Our Services</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="container">{cardItems}</div>
    </section>
  );
};

export default Services;
