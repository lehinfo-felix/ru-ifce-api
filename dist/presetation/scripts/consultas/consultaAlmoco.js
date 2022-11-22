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
exports.getRefeicoes = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const getRefeicoes = () => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield puppeteer_1.default.launch();
    const page = yield browser.newPage();
    yield page.goto("https://ru.cedro.ifce.edu.br/sign-in");
    yield page.type('[name="email"]', "lehinfo.felix@gmail.com");
    yield page.type('[name="password"]', "123456");
    yield page.click(".App1-MuiButton-label");
    yield page.waitForNavigation();
    const length = yield page.evaluate(() => {
        return document.querySelectorAll(".App1-MuiCardContent-root")[1].children
            .length;
    });
    const arrayPosition = [];
    for (let index = 1; index < length - 2; index++) {
        const indexArray = length - index;
        arrayPosition.push(indexArray);
    }
    console.log(arrayPosition);
    //setaId
    yield page.evaluate(() => {
        return (document.querySelectorAll(".App1-MuiCardContent-root")[1].id =
            "refeicoes");
    });
    const text = yield page.evaluate(() => {
        var _a;
        //return document.querySelector("#refeicoes")?.textContent
        return (_a = document.querySelector("#refeicoes")) === null || _a === void 0 ? void 0 : _a.innerHTML;
    });
    return text;
});
exports.getRefeicoes = getRefeicoes;
