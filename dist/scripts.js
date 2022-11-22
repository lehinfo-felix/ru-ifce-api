"use strict";
// import puppeteer from "puppeteer";
// export const getRefeicoes = async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   await page.goto("https://ru.cedro.ifce.edu.br/sign-in");
//   await page.type('[name="email"]', "carlosemannoel2017@gmail.com");
//   await page.type('[name="password"]', "123456");
//   await page.click(".App1-MuiButton-label");
//   await page.waitForNavigation();
//   const length = await page.evaluate(() => {
//     return document.querySelectorAll(".App1-MuiCardContent-root")[1].children
//       .length;
//   });
//   const arrayPosition = [];
//   for (let index = 1; index < length - 2; index++) {
//     arrayPosition.push(length - index);
//   }
// const refeicoes: Array<string> = []
//   for (let position in arrayPosition) {
//     const refeicao = await page.evaluate(() => {
//       return document.querySelectorAll(".App1-MuiCardContent-root")[1]
//         .children[3].children[1].textContent;
//     }) as string;
//     console.log(refeicao);
//     refeicoes.push(refeicao)
//   }
// };
