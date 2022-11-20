import puppeteer from "puppeteer";
export const consultarAlmoco = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://ru.cedro.ifce.edu.br/sign-in");
  await page.type('[name="email"]', "carlosemannoel2017@gmail.com");
  await page.type('[name="password"]', "123456");
  await page.click(".App1-MuiButton-label");
  await page.waitForNavigation();

  const length = await page.evaluate(() => {
    return document.querySelectorAll(".App1-MuiCardContent-root")[1].children
      .length;
  });

  let arrayPosition: Array<number> = [];
  for (let index = 1; index < length - 2; index++) {
    const indexArray = length - index;
    arrayPosition.push(indexArray);
  }
  console.log(arrayPosition);
  for (let position in arrayPosition) {
    const refeicao = await page.evaluate(() => {
      return document.querySelectorAll(".App1-MuiCardContent-root")[1].children[3].children[1].innerHTML
      
    });

   console.log(refeicao)
  }


};


