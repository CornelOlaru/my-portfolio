import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Component } from "react";

 {/* eslint-disable react/prop-types */}
class ProjectsPage extends Component {
  render() {
    return (
      


      <Card bg="dark" className="d-flex justify-content-center m-5 " style={{ width: "18rem" }}>
       
        <Card.Img className="p-2 rounded" variant="top" src={this.props.image} />
        <Card.Body>
          <Card.Title className="text-white">{this.props.cardTitle}</Card.Title>
          <Card.Text className="">{this.props.cardText}</Card.Text>
          <span className="d-flex justify-content-center gap-5">

          <a href={this.props.cardLink} target="_blank"><Button className="btn text-black" variant="primary">
          View</Button></a>
          <Button className="text-black" variant="secondary">About</Button>
          </span>
        </Card.Body>
      </Card>


    );
  }
}
export default ProjectsPage;