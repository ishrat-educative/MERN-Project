import axios from "axios";
export default {
  getData: () =>
    axios({
      method: "GET",
      url: "http://localhost:8080/findAllCourses",
    }),
};
