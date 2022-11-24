"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import mongoose from "mongoose";
// import mongoConnect from "./db";
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
app.use(routes_1.default);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("ru-ifce-bot iniciado na porta " + PORT + "🚀");
}));
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
