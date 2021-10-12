import React, { Component } from "react";
import { Container } from "react-bootstrap";
import SearchCourse from "./Search";
import Courses from "./Courses";
import api from "./Data/api";
class BaseComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { courses: [], search_string: "", loaded: false };
  }

  handleSearchStringUpdate = (searchString) => {
    console.log("Search string update is " + searchString);
    this.setState({ search_string: searchString });
  };

  showData = (results) => {
    console.log(results.data);
    results.data.map((result) => {
      console.log("Title is : " + result.title);
    });
  };

  render() {
    return (
      <Container>
        <SearchCourse
          search_string={this.state.search_string}
          searchStringUpdated={this.handleSearchStringUpdate}
        />
        <Courses
          courses_data={this.state.courses}
          loaded_from_db={this.state.loaded}
          search_string={this.state.search_string}
        ></Courses>
      </Container>
    );
  }

  componentDidMount() {
    api
      .getData()
      .then((res) => {
        //this.showData(res);
        if (res.data.length > 0)
          this.setState({
            courses: res.data,
            loaded: true,
            load_success: false,
          });
        else this.setState({ loaded: true });
      })
      .catch((err) => {
        console.log("zzzz : " + err);
        this.setState({ loaded: true });
      });
  }
}

export default BaseComponent;
