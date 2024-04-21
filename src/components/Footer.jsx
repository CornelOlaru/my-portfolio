
import "./FooterStyle.css"
import {
  FaFacebookF,
  FaHome,
  FaInstagram,
  FaLinkedinIn,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              size={20}
              style={{ color: "#fff", marginRight: "1.5rem" }}
            />
          <div>
            <p>Calea Grivitei 401</p>
            <p>Bucuresti, Romania</p>
          </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "1.5rem" }}
              />
              +40721894704
            </h4>
          </div>
          <div className="email">
            <h4>
              {" "}
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "1.5rem" }}
              />
              cornel.olaru47@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <div className="company">
            <p style={{ color: "#fff" , margin: "10px" }}>
              A personal profile website made by Corneliu Olaru
            </p>
            
           <h4>CorneliuOlaru © 2022 ALL RIGHTS RESERVED.</h4>
          </div>
          <div className="social">
            <a
              href="https://www.facebook.com/007IF"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF
                size={20}
                style={{ color: "#fff", margin: "1rem" }}
              />
            </a>
            <a
              href="https://www.instagram.com/cornel.0laru/?hl=ro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={20}
                style={{ color: "#fff", margin: "1rem" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/corneliu-olaru-443129143/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                size={20}
                style={{ color: "#fff", margin: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
