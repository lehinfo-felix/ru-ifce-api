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
exports.consultaRefeicoes = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const consultaRefeicoes = (callback) => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield puppeteer_1.default.launch({ headless: false });
    const page = yield browser.newPage();
    yield page.goto("https://ru.cedro.ifce.edu.br/sign-in");
    yield page.type('[name="email"]', "lehinfo.felix@gmail.com");
    yield page.type('[name="password"]', "123456");
    yield page.click(".App1-MuiButton-label");
    yield page.waitForNavigation();
    setTimeout(() => {
        page.waitForSelector(".App1-MuiCardContent-root").then(() => {
            page
                .evaluate(() => {
                return (document.querySelectorAll(".App1-MuiCardContent-root")[1].id =
                    "refeicoes");
            })
                .then(() => __awaiter(void 0, void 0, void 0, function* () {
                page
                    .evaluate(() => {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
                    return {
                        refeicaoUm: {
                            nome: (_b = (_a = document.querySelectorAll("#refeicoes > div")[0]) === null || _a === void 0 ? void 0 : _a.childNodes[0]) === null || _b === void 0 ? void 0 : _b.textContent,
                            Descricao: (_d = (_c = document.querySelectorAll("#refeicoes > div")[0]) === null || _c === void 0 ? void 0 : _c.childNodes[1]) === null || _d === void 0 ? void 0 : _d.textContent,
                        },
                        refeicaoDois: {
                            nome: (_f = (_e = document.querySelectorAll("#refeicoes > div")[1]) === null || _e === void 0 ? void 0 : _e.childNodes[0]) === null || _f === void 0 ? void 0 : _f.textContent,
                            Descricao: (_h = (_g = document.querySelectorAll("#refeicoes > div")[1]) === null || _g === void 0 ? void 0 : _g.childNodes[1]) === null || _h === void 0 ? void 0 : _h.textContent,
                        },
                        refeicaoTres: {
                            nome: (_k = (_j = document.querySelectorAll("#refeicoes > div")[2]) === null || _j === void 0 ? void 0 : _j.childNodes[0]) === null || _k === void 0 ? void 0 : _k.textContent,
                            Descricao: (_m = (_l = document.querySelectorAll("#refeicoes > div")[2]) === null || _l === void 0 ? void 0 : _l.childNodes[1]) === null || _m === void 0 ? void 0 : _m.textContent,
                        },
                        refeicaoQuatro: {
                            nome: (_p = (_o = document.querySelectorAll("#refeicoes > div")[3]) === null || _o === void 0 ? void 0 : _o.childNodes[0]) === null || _p === void 0 ? void 0 : _p.textContent,
                            Descricao: (_r = (_q = document.querySelectorAll("#refeicoes > div")[3]) === null || _q === void 0 ? void 0 : _q.childNodes[1]) === null || _r === void 0 ? void 0 : _r.textContent,
                        },
                    };
                })
                    .then((divs) => __awaiter(void 0, void 0, void 0, function* () {
                    console.log("Divs", divs);
                    callback(divs);
                }));
            }));
        });
    }, 900);
});
exports.consultaRefeicoes = consultaRefeicoes;
