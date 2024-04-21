
import ContactPage from "../components/ContactPage";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="Contact"
        text="Fill up the form bellow to leave me a message "
      />
      <ContactPage/>
      <Footer />
    </div>
  );
};

export default Contact;
