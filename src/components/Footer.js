import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <article>
          <a href="#" className="footer__logo">
            <h3>HEALTHCARE</h3>
          </a>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Kuwait</p>
          <div>
            <i className="bx bxs-phone"></i>
            <small>+11 22 333 44 55</small>
          </div>
          <div>
            <i className="bx bx-mail-send"></i>
            <small>support@healthcare.com</small>
          </div>
        </article>

        <article>
          <h3>Support</h3>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Purchasing Policy</a>
          <a href="#">Terms & Condition</a>
          <a href="#">Career</a>
        </article>

        <article>
          <h3>Permalinks</h3>
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#specialists">Specialists</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#appointment" className="btn-primary">
            Get Appointment
          </a>
        </article>

        <article>
          <h3>Contact Us</h3>
          <a href="#">FAQs</a>
          <div className="footer__socials">
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
        </article>
      </div>
      <div className="copyright">
        <small>&copy; Copyright HEALTHCARE. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
