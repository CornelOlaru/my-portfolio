
import "./HeroImgStyle.css";
import IntroImg from "../assets/intro-img.jpg";
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hi, I&apos;m a Student learning </p>
        <h1>Automation and Computer Science</h1>

        <div>
          <Link to="/resume" className="btn">
            My CV
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
