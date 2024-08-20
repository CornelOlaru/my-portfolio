import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";
import ProjectsPage from "../components/ProjectsPage";
import sweetDreams from "../assets/sweetdreams.webp";
import cardioGuard from "../assets/cardioguard.webp";
import artown from "../assets/logo-artown 1.jpg";
import { Col, Container, Row } from "react-bootstrap";

import "../components/AboutPageStyle.css";

export default function Projects() {
  return (
    <div>
        
      <Navbar />
      <HeroImg2 heading="Projects" text="You can checkout my Projects below" />

      <Container>
        <Row>
          <Col>
            <ProjectsPage
              image={sweetDreams}
              cardTitle="Sweet Dreams"
              cardText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, dolor."
              cardLink="https://sweetdreams-theta.vercel.app/"
            />
          </Col>
          <Col>
            <ProjectsPage
              image={cardioGuard}
              cardTitle="Cardio Guard"
              cardText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, dolor."
              cardLink="https://cardioguard.eu/"
            />
          </Col>
          <Col>
            <ProjectsPage
              image={artown}
              cardTitle="Artown Festival"
              cardText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, dolor."
              cardLink="https://www.artown-festival.art/"
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
