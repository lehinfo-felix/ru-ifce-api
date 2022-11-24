// import mongoose from "mongoose";
// import mongoConnect from "./db";
import dotenv from "dotenv";
import express from "express";
import route from "./routes";
import fs from 'fs'

import {saveInJson} from './presetation/scripts/addRefeicoesInJson'
const app = express();

dotenv.config();

app.use(express.json());

app.use(route);

//WsetTimeout(()=>save(), 1.08^7)

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  console.log("ru-ifce-bot iniciado na porta " + PORT + "🚀");
});
// mongoose
//   .connect("mongodb://localhost:27017/testtt")
//   .then(() => {
//     // app.listen(port, async () => {
//     //   console.log("Api ru-ifce-bot running in port " + port);
//     // });
//   })
//   .catch(() => {
//     console.log("MongoDb not connected");
//   });
