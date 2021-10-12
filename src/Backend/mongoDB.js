var mongoose = require("mongoose");

const data = require("../Data/courses.json");

//Set up default mongoose connection
//var mongoDB =
//  "mongodb+srv://test:A123456!@cluster0.bputu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

var mongoDB = "mongodb://127.0.0.1:27017/basic-mern-app";

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

var Schema = mongoose.Schema;

var CourseSchema = new Schema({
  title: String,
  author: String,
  free: Boolean,
  img: String,
});

var CourseModel = mongoose.model("CourseModel", CourseSchema);

module.exports.connectToDatabase = (callback) => {
  mongoose.connect(
    mongoDB,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      callback(err);
    }
  );
};

module.exports.InsertCourses = async () => {
  /*var course1 = new CourseModel({
    title: "Web Development with MERN",
    author: "Vicky",
    free: true,
    img: "/images/2.jpeg",
  });
  var course2 = new CourseModel({
    title: "Web Development with MERN",
    author: "Vicky",
    free: true,
    img: "/images/2.jpeg",
  });*/

  /*course1.save((err, id) => {
    if (!err) console.log("Course Inserted Successfully with id: " + id);
    else console.log("Error on Inserting Course: " + err);
  });*/
  /*CourseModel.insertMany([course1, course2], (err, id) => {
    if (!err) console.log("Course Inserted Successfully with id: " + id);
    else console.log("Error on Inserting Course: " + err);
  });*/

  CourseModel.insertMany(data, (err, id) => {
    if (!err) console.log("Course Inserted Successfully with id: " + id);
    else console.log("Error on Inserting Course: " + err);
  });

  /*CourseModel.insert(course1)
    .then((id) => {
      console.log("Data inserted:" + id);
    })
    .catch((err) => {
      "Data insertion Error: " + err;
    });*/
};

module.exports.RetrieveCourses = async () => {
  results = await CourseModel.find();
  return results;
};
