import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";
import ProjectsPage from "../components/ProjectsPage";
import sweetDreams from "../assets/sweetdreams.webp";
import cardioGuard from "../assets/cardioguard.webp";
import artown from "../assets/logo-artown 1.jpg";
import aromia from "../assets/Aromia.png";
import { Col, Container, Row } from "react-bootstrap";

import "../components/AboutPageStyle.css";
import { useState } from "react";

export default function Projects() {
  const [flippedCardId, setflippedCardId] = useState(null);

  const onCardFlip = (id) => {
    setflippedCardId(flippedCardId === id ? null : id);
  };

  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Projects" text="You can checkout my Projects below" />

      <Container>
        <Row>
          <Col>
            <ProjectsPage
              cardId={1}
              image={sweetDreams}
              cardTitle="Sweet Dreams"
              cardText='The "Sweet Dreams" website is a charming online pastry shop that showcases a delightful selection of 
              baked goods. Users can easily browse through the menu, learn about each item, and place orders directly through the site. 
              With a focus on quality ingredients and artisanal baking, "Sweet Dreams" offers a seamless and enjoyable shopping experience for dessert lovers.'
              cardLink="https://sweetdreams-theta.vercel.app/"
              flippedCardId={flippedCardId === 1}
              onCardFlip={() => onCardFlip(1)}
            />
          </Col>
          <Col>
            <ProjectsPage
              cardId={2}
              image={cardioGuard}
              cardTitle="Cardio Guard"
              cardText='The "Cardio Guard" website is a secure platform designed for doctors to efficiently manage patient information. It allows healthcare professionals to add, view, edit, and delete patient records, as well as access detailed information about assigned patients.'
              cardLink="https://cardioguard.eu/"
              flippedCardId={flippedCardId === 2}
              onCardFlip={() => onCardFlip(2)}
            />
          </Col>
          <Col>
            <ProjectsPage
              cardId={3}
              image={artown}
              cardTitle="Artown Festival"
              cardText="Artown Festival is a website created to represent a dynamic group of artists dedicated to promoting local art and fostering creative expression within the community. This platform serves as a hub for celebrating artistic endeavors and showcasing the vibrant and diverse talent of local artists."
              cardLink="https://www.artown-festival.art/"
              flippedCardId={flippedCardId === 3}
              onCardFlip={() => onCardFlip(3)}
            />
          </Col>
          <Col>
            <ProjectsPage
              cardId={4}
              image={aromia}
              cardTitle="Aromia"
              cardText="Aromia is an e-commerce platform developed by a team of three interns at IBM Romania, showcasing our dedication to creating a seamless and innovative online shopping experience. This website features a diverse range of high-quality products, designed to meet the needs and preferences of our customers."
              cardLink="https://mern-frontend-ibm-project.vercel.app/"
              flippedCardId={flippedCardId === 4}
              onCardFlip={() => onCardFlip(4)}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
