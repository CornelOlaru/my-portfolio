import { useState } from "react";
import "./ContactPageStyle.css";
import emailjs from 'emailjs-com';
const ContactPage = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '', 
    subject: '',
    message: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };



  const sendEmail = (templateId, variables) => {
    return emailjs.send('service_2s17kpf', templateId, variables, 'bMRkCDV02g_LhAJnS');
  };







  const submitBtn = (event) => {
    event.preventDefault(); // Prevent page reload

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    sendEmail('template_39xrlvq', templateParams)
      .then((result) => {
        alert("Message Sent Successfully!!!");
        console.log(result.status, result.text, result)
        // Send auto-reply email
        sendEmail('template_39xrlvq', { 
          email: formData.email, 
          firstName: formData.firstName ,
          subject: formData.subject,
          message: formData.message
        });

        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
          agree: false,
        });
      }, (error) => {
        console.error('Failed to send email:', error);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={submitBtn}>
        <div className="form-group">
          <input
            type="text"
            className="form-input"
            id="validationDefault01"
            placeholder=""
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <label htmlFor="validationDefault01" className="form-label">
            First name
          </label>
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-input"
            id="validationDefault02"
            placeholder=""
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <label htmlFor="validationDefault02" className="form-label">
            Last name
          </label>
        </div>
        <div className="form-group">
            
            <input
              type="email"
              className="form-input"
              id="email"
              name="email"
              placeholder=""
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className="form-label">
              Email
            </label>
          </div>
        <div className="form-group">
          <input
            type="text"
            className="form-input"
            id="validationDefault03"
            name="subject"
            placeholder=""
            value={formData.subject}

            onChange={handleChange}
            required
          />
          <label htmlFor="validationDefault03" className="form-label">
            Subject
          </label>
        </div>

        <div className="form-group">
          <textarea
            className="form-input form-textarea"
            id="exampleFormControlTextarea1"
            placeholder=""
            name="message"
            value={formData.message}

            onChange={handleChange}
            rows="3"
            required
          ></textarea>
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label textarea-label"
          >
            Message
          </label>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={formData.agree}
            id="invalidCheck2"
            name="agree"
            
            onChange={handleChange}
            required
            />
          <label className="form-check-label" htmlFor="invalidCheck2">
            Agree to terms and conditions
          </label>
        </div>
            </div>

        <div className="submit-container">
          <button className="btn contact-btn" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
