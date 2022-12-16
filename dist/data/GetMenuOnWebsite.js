"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMenuOnWebsite = void 0;
const puppeteer_core_1 = __importDefault(require("puppeteer-core"));
const puppeteer_1 = require("puppeteer");
class GetMenuOnWebsite {
    async handle(callback) {
        const browser = await puppeteer_core_1.default.launch({
            headless: true,
            executablePath: (0, puppeteer_1.executablePath)(),
        });
        const page = await browser.newPage();
        await page.goto("https://ru.cedro.ifce.edu.br/sign-in");
        await page.type('[name="email"]', "lehinfo.felix@gmail.com");
        await page.type('[name="password"]', "123456");
        await page.click(".App1-MuiButton-label");
        await page.waitForNavigation();
        setTimeout(() => {
            page.waitForSelector(".App1-MuiCardContent-root").then(() => {
                page
                    .evaluate(() => {
                    return (document.querySelectorAll(".App1-MuiCardContent-root")[1].id = "refeicoes");
                })
                    .then(async () => {
                    page
                        .evaluate(() => {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7;
                        return {
                            menuOne: {
                                name: (_b = (_a = document.querySelectorAll("#refeicoes > div")[0]) === null || _a === void 0 ? void 0 : _a.childNodes[0]) === null || _b === void 0 ? void 0 : _b.textContent,
                                description: (_d = (_c = document.querySelectorAll("#refeicoes > div")[0]) === null || _c === void 0 ? void 0 : _c.childNodes[1]) === null || _d === void 0 ? void 0 : _d.textContent,
                                startTime: (_f = (_e = document.querySelectorAll("#refeicoes > div")[0]) === null || _e === void 0 ? void 0 : _e.childNodes[2]) === null || _f === void 0 ? void 0 : _f.textContent,
                                endTime: (_h = (_g = document.querySelectorAll("#refeicoes > div")[0]) === null || _g === void 0 ? void 0 : _g.childNodes[3]) === null || _h === void 0 ? void 0 : _h.textContent,
                            },
                            menuTwo: {
                                name: (_k = (_j = document.querySelectorAll("#refeicoes > div")[1]) === null || _j === void 0 ? void 0 : _j.childNodes[0]) === null || _k === void 0 ? void 0 : _k.textContent,
                                description: (_m = (_l = document.querySelectorAll("#refeicoes > div")[1]) === null || _l === void 0 ? void 0 : _l.childNodes[1]) === null || _m === void 0 ? void 0 : _m.textContent,
                                startTime: (_p = (_o = document.querySelectorAll("#refeicoes > div")[1]) === null || _o === void 0 ? void 0 : _o.childNodes[2]) === null || _p === void 0 ? void 0 : _p.textContent,
                                endTime: (_r = (_q = document.querySelectorAll("#refeicoes > div")[1]) === null || _q === void 0 ? void 0 : _q.childNodes[3]) === null || _r === void 0 ? void 0 : _r.textContent,
                            },
                            menuThree: {
                                name: (_t = (_s = document.querySelectorAll("#refeicoes > div")[2]) === null || _s === void 0 ? void 0 : _s.childNodes[0]) === null || _t === void 0 ? void 0 : _t.textContent,
                                description: (_v = (_u = document.querySelectorAll("#refeicoes > div")[2]) === null || _u === void 0 ? void 0 : _u.childNodes[1]) === null || _v === void 0 ? void 0 : _v.textContent,
                                startTime: (_x = (_w = document.querySelectorAll("#refeicoes > div")[2]) === null || _w === void 0 ? void 0 : _w.childNodes[2]) === null || _x === void 0 ? void 0 : _x.textContent,
                                endTime: (_z = (_y = document.querySelectorAll("#refeicoes > div")[2]) === null || _y === void 0 ? void 0 : _y.childNodes[3]) === null || _z === void 0 ? void 0 : _z.textContent,
                            },
                            menuFor: {
                                name: (_1 = (_0 = document.querySelectorAll("#refeicoes > div")[3]) === null || _0 === void 0 ? void 0 : _0.childNodes[0]) === null || _1 === void 0 ? void 0 : _1.textContent,
                                description: (_3 = (_2 = document.querySelectorAll("#refeicoes > div")[3]) === null || _2 === void 0 ? void 0 : _2.childNodes[1]) === null || _3 === void 0 ? void 0 : _3.textContent,
                                startTime: (_5 = (_4 = document.querySelectorAll("#refeicoes > div")[3]) === null || _4 === void 0 ? void 0 : _4.childNodes[2]) === null || _5 === void 0 ? void 0 : _5.textContent,
                                endTime: (_7 = (_6 = document.querySelectorAll("#refeicoes > div")[3]) === null || _6 === void 0 ? void 0 : _6.childNodes[3]) === null || _7 === void 0 ? void 0 : _7.textContent,
                            },
                        };
                    })
                        .then(async (menu) => {
                        console.log(menu);
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
                    });
                });
            });
        }, 900);
    }
}
exports.GetMenuOnWebsite = GetMenuOnWebsite;
//# sourceMappingURL=GetMenuOnWebsite.js.map