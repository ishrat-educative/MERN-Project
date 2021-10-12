import { Row, Col } from "react-bootstrap";
import { Image, Button } from "react-bootstrap";

import "react-rater/lib/react-rater.css";
import React from "react";

function Course(props) {
  return renderCourses(props.data);
}

function renderCourses(course) {
  console.log(course);
  return (
    <Row>
      <Col xs={2} className={"m-2 me-1"}>
        <div>
          <Image
            style={{ width: "100%", height: "100%" }}
            src="/images/1.jpeg"
            alt="Image could not load"
          ></Image>
        </div>
      </Col>
      <Col xs={6} className={"m-1 mt-2"}>
        <div>
          <a href="">{course.title}</a>
        </div>
        <div>{course.author}</div>
        <div className={"mt-3"}>{course.free ? "Free" : "Paid"}</div>
        <Button variant="primary" className={"mt-1"}>
          Buy Now
        </Button>
      </Col>
    </Row>
  );

  //return <ul>{listItems}</ul>;

  //return <Container>{listItems}</Container>;
}

export default Course;
