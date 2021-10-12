const express = require("express");
const app = express();

const {
  InsertCourses,
  connectToDatabase,
  RetrieveCourses,
} = require("./mongoDB.js");

pushDataToMongoDB = async () => {
  saveCourse();
};

getDataFromMongoDB = async () => {
  results = await RetrieveCourses();
  return results;
};

var cors = require("cors");
app.use(cors());

app.get("/findAllCourses", async (req, res) => {
  //res.json(data);
  results = await getDataFromMongoDB();
  console.log("Sending: " + results);
  res.send(results);
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
  connectToDatabase((err) => {
    if (!err) {
      console.log("Succesfully Connected to the Database");
      //RetrieveCourses();
      InsertCourses();
    } else console.log("Error in connection to the Database");
  });
  // saveCourse();
  //console.log(saveCourse);
});
