import puppeteer from "puppeteer";

async function GetPage() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://ru.cedro.ifce.edu.br/sign-in");

  return page;
}
export default GetPage();