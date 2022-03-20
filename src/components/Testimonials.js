import React, { useLayoutEffect } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

/* self imports */
import avatarImg from "../assets/avatar.jpg";

/* styles */
import "swiper/css";
import "swiper/css/pagination";

const TestimonialCard = (props) => {
  const { review, avatar, name, role } = props;

  return (
    <article>
      <p>{review}</p>
      <div className="patient">
        <div className="avatar">
          <img src={avatar} alt={name} />
        </div>
        <div className="patient__details">
          <h5>{name}</h5>
          <small>{role}</small>
        </div>
      </div>
    </article>
  );
};

const Testimonials = ({
  testimonialCardInfos = [
    {
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: avatarImg,
      name: "John Green",
      role: "Patient",
    },
    {
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: avatarImg,
      name: "John White",
      role: "Patient",
    },
    {
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: avatarImg,
      name: "John Black",
      role: "Patient",
    },
    {
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: avatarImg,
      name: "John Yellow",
      role: "Patient",
    },
    {
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: avatarImg,
      name: "John Blue",
      role: "Patient",
    },
    {
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: avatarImg,
      name: "John Red",
      role: "Patient",
    },
    {
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: avatarImg,
      name: "John Orange",
      role: "Patient",
    },
  ],
}) => {
  const testimonialCardItems = testimonialCardInfos.map((info) => (
    <SwiperSlide key={info.name}>
      <TestimonialCard {...info} />
    </SwiperSlide>
  ));

  useLayoutEffect(() => {
    const positionSwiperPaginationUnderSlides = () => {
      const queryResult = document.querySelectorAll(".swiper-pagination");
      if (queryResult.length) {
        const paginationNode = queryResult[0];
        const parentNode = paginationNode.parentNode;

        parentNode.appendChild(paginationNode);
      }
    };

    positionSwiperPaginationUnderSlides();
  }, []);

  return (
    <section id="testimonials">
      <h2>What Our Patients Say</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <Swiper
        id="swiper"
        className="container"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonialCardItems}
      </Swiper>
    </section>
  );
};

export default Testimonials;
