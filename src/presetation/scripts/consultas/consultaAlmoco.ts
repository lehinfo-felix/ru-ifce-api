import puppeteer from "puppeteer";
export const getRefeicoes = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://ru.cedro.ifce.edu.br/sign-in");
  await page.type('[name="email"]', "lehinfo.felix@gmail.com");
  await page.type('[name="password"]', "123456");
  await page.click(".App1-MuiButton-label");
  await page.waitForNavigation();

  const length = await page.evaluate(() => {
    return document.querySelectorAll(".App1-MuiCardContent-root")[1].children
      .length;
  });

  const arrayPosition: Array<number> = [];
  for (let index = 1; index < length - 2; index++) {
    const indexArray = length - index;
    arrayPosition.push(indexArray);
  }
  console.log(arrayPosition);
//setaId
  await page.evaluate(() => {
    return (document.querySelectorAll(".App1-MuiCardContent-root")[1].id =
      "refeicoes");
  });

  const text = await page.evaluate(() => {
    //return document.querySelector("#refeicoes")?.textContent
    return document.querySelector("#refeicoes")?.innerHTML
  });
return text
};
