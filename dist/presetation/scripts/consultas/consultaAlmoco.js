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
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7;
                    return {
                        menuOne: {
                            name: (_b = (_a = document.querySelectorAll("#refeicoes > div")[0]) === null || _a === void 0 ? void 0 : _a.childNodes[0]) === null || _b === void 0 ? void 0 : _b.textContent,
                            description: (_d = (_c = document.querySelectorAll("#refeicoes > div")[0]) === null || _c === void 0 ? void 0 : _c.childNodes[1]) === null || _d === void 0 ? void 0 : _d.textContent,
                            startTime: (_f = (_e = document.querySelectorAll("#refeicoes > div")[0]) === null || _e === void 0 ? void 0 : _e.childNodes[2]) === null || _f === void 0 ? void 0 : _f.textContent,
                            endTime: (_h = (_g = document.querySelectorAll("#refeicoes > div")[0]) === null || _g === void 0 ? void 0 : _g.childNodes[2]) === null || _h === void 0 ? void 0 : _h.textContent,
                        },
                        menuTwo: {
                            name: (_k = (_j = document.querySelectorAll("#refeicoes > div")[0]) === null || _j === void 0 ? void 0 : _j.childNodes[0]) === null || _k === void 0 ? void 0 : _k.textContent,
                            description: (_m = (_l = document.querySelectorAll("#refeicoes > div")[0]) === null || _l === void 0 ? void 0 : _l.childNodes[1]) === null || _m === void 0 ? void 0 : _m.textContent,
                            startTime: (_p = (_o = document.querySelectorAll("#refeicoes > div")[0]) === null || _o === void 0 ? void 0 : _o.childNodes[2]) === null || _p === void 0 ? void 0 : _p.textContent,
                            endTime: (_r = (_q = document.querySelectorAll("#refeicoes > div")[0]) === null || _q === void 0 ? void 0 : _q.childNodes[2]) === null || _r === void 0 ? void 0 : _r.textContent,
                        },
                        menuThree: {
                            name: (_t = (_s = document.querySelectorAll("#refeicoes > div")[0]) === null || _s === void 0 ? void 0 : _s.childNodes[0]) === null || _t === void 0 ? void 0 : _t.textContent,
                            description: (_v = (_u = document.querySelectorAll("#refeicoes > div")[0]) === null || _u === void 0 ? void 0 : _u.childNodes[1]) === null || _v === void 0 ? void 0 : _v.textContent,
                            startTime: (_x = (_w = document.querySelectorAll("#refeicoes > div")[0]) === null || _w === void 0 ? void 0 : _w.childNodes[2]) === null || _x === void 0 ? void 0 : _x.textContent,
                            endTime: (_z = (_y = document.querySelectorAll("#refeicoes > div")[0]) === null || _y === void 0 ? void 0 : _y.childNodes[2]) === null || _z === void 0 ? void 0 : _z.textContent,
                        },
                        menuFor: {
                            name: (_1 = (_0 = document.querySelectorAll("#refeicoes > div")[0]) === null || _0 === void 0 ? void 0 : _0.childNodes[0]) === null || _1 === void 0 ? void 0 : _1.textContent,
                            description: (_3 = (_2 = document.querySelectorAll("#refeicoes > div")[0]) === null || _2 === void 0 ? void 0 : _2.childNodes[1]) === null || _3 === void 0 ? void 0 : _3.textContent,
                            startTime: (_5 = (_4 = document.querySelectorAll("#refeicoes > div")[0]) === null || _4 === void 0 ? void 0 : _4.childNodes[2]) === null || _5 === void 0 ? void 0 : _5.textContent,
                            endTime: (_7 = (_6 = document.querySelectorAll("#refeicoes > div")[0]) === null || _6 === void 0 ? void 0 : _6.childNodes[2]) === null || _7 === void 0 ? void 0 : _7.textContent,
                        },
                    };
                })
                    .then((menu) => __awaiter(void 0, void 0, void 0, function* () {
                    const menuReady = [];
                    if (Object.keys(menu.menuOne).length === 4)
                        menuReady.push(menu.menuOne);
                    if (Object.keys(menu.menuTwo).length === 4)
                        menuReady.push(menu.menuTwo);
                    if (Object.keys(menu.menuThree).length === 4)
                        menuReady.push(menu.menuThree);
                    if (Object.keys(menu.menuFor).length === 4)
                        menuReady.push(menu.menuFor);
                    callback(menuReady);
                }));
            }));
        });
    }, 900);
});
exports.consultaRefeicoes = consultaRefeicoes;
