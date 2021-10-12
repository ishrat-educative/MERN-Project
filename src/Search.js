import React, { Component } from "react";

import { Form, Button, Row, Col, Container } from "react-bootstrap";

import { BsSearch } from "react-icons/bs";

class SearchCourse extends Component {
  constructor(props) {
    super(props);
    this.state = { search_string: "" };
  }

  pushToBaseComponent(event) {
    event.preventDefault();
    this.props.searchStringUpdated(this.state.search_string);
  }
  handleUpdate = async (event) => {
    await this.setState({ search_string: event.target.value });
    this.pushToBaseComponent(event);
  };

  submitSearchString = (event) => {
    this.pushToBaseComponent(event);
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.submitSearchString} className="mt-2 mb-4">
          <Row>
            <Col xs={11}>
              <Form.Control
                type="text"
                placeholder="Course or University name"
                onChange={this.handleUpdate}
              />
            </Col>
            <Col xs={1}>
              <Button variant="primary" type="submit">
                <BsSearch />
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default SearchCourse;
