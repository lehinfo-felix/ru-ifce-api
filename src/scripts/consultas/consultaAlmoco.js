import puppeteer from "puppeteer";
  export const consultarAlmoco = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://ru.cedro.ifce.edu.br/sign-in");
  await page.type('[name="email"]', "lehinfo.felix@gmail.com");
  await page.type('[name="password"]', "123456");
  await page.click(".App1-MuiButton-label");

  await page.click(".App1-MuiButton-root");
};

consultarAlmoco();