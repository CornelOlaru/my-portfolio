import "./ContactPageStyle.css";
const ContactPage = () => {
  const submitBtn = () => {
    alert("Message Sent Succesfully!");
  };

  return (
    <div className="form">
      {/* <form>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Your Email</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type Your Message Here..." />
        <button className="btn" onClick={contactSubmit}>
          Submit
        </button>
      </form> */}
      <form className="row g-3">
        <label htmlFor="validationDefault01" className="form-label">
          First name
        </label>

        <input
          type="text"
          className="form-control"
          id="validationDefault01"
          placeholder="Enter your first name..."
          required
        />

        <label htmlFor="validationDefault02" className="form-label">
          Last name
        </label>

        <input
          type="text"
          className="form-control"
          id="validationDefault02"
          placeholder="Enter your last name..."
          required
        />

        <label htmlFor="validationDefault02" className="form-label">
          Subject
        </label>

        <input
          type="text"
          className="form-control"
          id="validationDefault03"
          placeholder="Enter the subject..."
          required
        />

        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          placeholder="Enter your message here..."
          rows="3"
        ></textarea>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="invalidCheck2"
            required
          />
          <label className="form-check-label" htmlFor="invalidCheck2">
            Agree to terms and conditions
          </label>
        </div>
        <div>
          <button onClick={submitBtn} className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
