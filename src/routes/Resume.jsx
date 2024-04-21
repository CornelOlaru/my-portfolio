
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";
import ResumeCardDownload from "../components/ResumeCardDownload";

const Resume = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Resume" text="You can checkout my Resume below"/>
      <ResumeCardDownload/>
      <Footer/>
    </div>
  );
};

export default Resume;
