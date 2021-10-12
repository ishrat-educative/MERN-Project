const express = require("express");
const app = express();

const data = require("../Data/courses.json");

const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://test:A123456!@cluster0.bputu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var collection = "";
client.connect((err) => {
  collection = client.db("courses_db").collection("courses");
  console.log("connected to database");
  // perform actions on the collection object
  //client.close();
  //getDataFromMongoDB();
  //pushDataToMongoDB();
});

pushDataToMongoDB = async () => {
  await collection.insertMany(data);
};

getDataFromMongoDB = async () => {
  var cursor = collection.find();
  const results = await cursor.toArray();
  console.log("Length of results is : " + results.length);
  results.map((result) => {
    console.log("Course Title: " + result.title);
  });
  return results;
};

var cors = require("cors");
app.use(cors());

app.get("/", async (req, res) => {
  console.log("here i am");
  console.log(data);

  //res.json(data);
  results = await getDataFromMongoDB();
  console.log("Sending: " + results);
  res.send(results);
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
