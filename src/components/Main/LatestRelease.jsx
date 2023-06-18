import React, { Component } from "react";
import Books from '../../data/fantasy.json';
import CardContainer from "./CardContainer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './LatestRelease.css';



class LatestRelease extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container className="slider-thumb">
        <Row> 
            <Col>
                {Books.map((book) =>{
                    return (
                        <CardContainer
                        key={book.asin}
                        img={book.img}
                        title={book.title}
                        category={"Category: " + book.category}
                        price={book.price + "€"}
                        btnTitle="Show Detail"
                        />

                    )
                })}
            </Col>
        </Row>
      </Container>
    );
  }
}

export default LatestRelease;
