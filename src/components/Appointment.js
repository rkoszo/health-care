import React, { useEffect, useState } from "react";

/* self imports */

const appointmentInfos = [
  {
    iconClassName: "bx bx-user",
    title: "Experience Doctors",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    iconClassName: "bx bx-reflect-horizontal",
    title: "Advanced Technology",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    iconClassName: "bx bx-first-aid",
    title: "Emergency Care",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const AppointmentInfo = (props) => {
  const { iconClassName, title, description } = props;

  return (
    <article>
      <div className="info__icon">
        <i className={iconClassName}></i>
      </div>
      <div>
        <h4>{title}</h4>
        <small>{description}</small>
      </div>
    </article>
  );
};

const Appointment = () => {
  const [selectDepartmentOptions, setSelectDepartmentOptions] = useState([]);
  const [selectDoctorOptions, setSelectDoctorOptions] = useState([]);

  useEffect(() => {
    // TODO get from service
    const selectDepartmentOptions = [
      "Department One",
      "Department Two",
      "Department Three",
      "Department Four",
    ];

    setSelectDepartmentOptions(selectDepartmentOptions);

    // TODO get from service
    const selectDoctorOptions = [
      "Doctor One",
      "Doctor Two",
      "Doctor Three",
      "Doctor Four",
      "Doctor Five",
      "Doctor Six",
      "Doctor Seven",
      "Doctor Eight",
    ];

    setSelectDoctorOptions(selectDoctorOptions);
  }, []);

  const appointmentInfoItems = appointmentInfos.map((info) => (
    <AppointmentInfo key={info.iconClassName} {...info} />
  ));

  const departmentOptions = selectDepartmentOptions.map((deparment) => (
    <option key={deparment} value={deparment}>
      {deparment}
    </option>
  ));

  const doctorOptions = selectDoctorOptions.map((doctor) => (
    <option key={doctor} value={doctor}>
      {doctor}
    </option>
  ));

  return (
    <section id="appointment">
      <div className="container">
        <div className="info">
          <h2>Get an Appointment</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {appointmentInfoItems}
        </div>

        <form>
          <div className="form__group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              id="name"
              required
            />
          </div>
          <div className="form__group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              placeholder="Enter Your Phone Number"
              id="phone"
              required
            />
          </div>
          <div className="form__group">
            <label htmlFor="date">Date</label>
            <input type="date" placeholder="Choose a date" id="date" required />
          </div>
          <div className="form__group">
            <label htmlFor="deparment">Select Deparment</label>
            <select id="deparment" required>
              {departmentOptions}
            </select>
          </div>
          <div className="form__group">
            <label htmlFor="doctor">Select Doctor</label>
            <select id="doctor" required>
              {doctorOptions}
            </select>
          </div>
          <div className="form__group">
            <label htmlFor="message">Additional Message</label>
            <textarea
              placeholder="Add a message"
              id="message"
              rows="6"
            ></textarea>
          </div>
          <input type="submit" value="Submit Request" className="btn-primary" />
        </form>
      </div>
    </section>
  );
};

export default Appointment;
