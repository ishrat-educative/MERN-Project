import React from "react";
import { Container } from "react-bootstrap";
import Course from "./Course";

function Courses(props) {
  let courses = props.courses_data;
  let loaded = props.loaded_from_db;
  let load_success = props.load_success;

  let coursesElements;

  if (courses.length > 0) {
    coursesElements = courses.map((course) => {
      if (
        course.title.includes(props.search_string) ||
        course.university.includes(props.search_string)
      )
        return (
          <div className="border border-light mt-1">
            <Course data={course}></Course>
          </div>
        );
    });
  } else
    return loaded ? (
      <div>No courses found</div>
    ) : (
      <div>Loading courses....</div>
    );

  return <Container>{coursesElements}</Container>;
}

export default Courses;
