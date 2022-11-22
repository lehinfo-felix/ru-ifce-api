import express from "express";
import mongoose from "mongoose";
import mongoConnect from "./db";
import route from "./routes";
const app = express();

app.use(express.json());

app.use(route);
const port = 8080

app.listen(port, async () => {
  console.log("Api ru-ifce-bot running in port " + port);
});
mongoose
  .connect("mongodb://localhost:27017/testtt")
  .then(() => {
    // app.listen(port, async () => {
    //   console.log("Api ru-ifce-bot running in port " + port);
    // });
  })
  .catch(() => {
    console.log("MongoDb not connected");
  });
