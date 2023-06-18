import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import { welcome } from "../../data/welcome";
import "./Welcome.css";

class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="container d-flex flex-column align-items-center justify-content-center w-auto jumbotron">
          <h1 className="jumbotron_title">
            M.S. BooksShop
          </h1>
          <p className="jumbotron_subtitle">
            Our Books Your Stories
          </p>

          <Carousel fade>
            {welcome.map((item) => {
              return (
                <Carousel.Item key={item.index} className={item.className}>
                  {
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="carouselImg"
                    />
                  }
                  <Carousel.Caption>
                    <h2>{item.captionTitle}</h2>
                    <p>{item.captionDesc}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </>
    );
  }
}

export default Welcome;