import  { Component } from "react";

import "./HeroImg2Style.css";

class HeroImg2 extends Component {
  render() {
    return (
      <div className="hero-img">
        <div className="heading">
           {/* eslint-disable-next-line react/prop-types */}
          <h1>{this.props.heading}</h1>
           {/* eslint-disable-next-line react/prop-types */}
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default HeroImg2;
