import React, { useState } from "react";
import "./style.css";

function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Do something with the form data
    // You can add your form submission logic here
  };

  return (
    <>
      <section className="connect-section">
        <div className="connect-container">
          <div className="divider mb-4" />
          <h2 className="section-title mb-2">LET'S CONNECT</h2>
          <p className="section-description mb-6">
            Contact our support team or make an appointment with our experts.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="input-container">
                <label htmlFor="full-name" className="label">
                  Full Name *
                  <input
                    id="full-name"
                    className="input-field"
                    name="fullName"
                    placeholder=""
                    required
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="email" className="label">
                  Email *
                  <input
                    id="email"
                    className="input-field"
                    name="email"
                    placeholder=""
                    required
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="contact-number" className="label">
                  Contact Number *
                  <input
                    id="contact-number"
                    className="input-field"
                    name="contactNumber"
                    placeholder=""
                    required
                    type="tel"
                    value={formData.contactNumber}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <label htmlFor="subject" className="label">
                Subject *
                <input
                  id="subject"
                  className="input-field"
                  name="subject"
                  placeholder=""
                  required
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="message" className="label">
                Message *
                <textarea
                  id="message"
                  className="textarea-field"
                  name="message"
                  placeholder=""
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </label>
              <button className="submit-button" type="submit">
                Submit Form
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Form;
