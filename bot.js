import puppeteer from "puppeteer";

async function bot() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://ru.cedro.ifce.edu.br/sign-in");

  await page.type('[name="email"]', "carlosemannoel2017@gmail.com");
  await page.type('[name="password"]', "123456");
  await page.click(".App1-MuiButton-label");

  const almoço = await page.evaluate(() => {
    return {
      clickInpurEmail: document.querySelectorAll(".App1-MuiTypography-root")[0],
    };
  });

  console.log(almoço);
  ("teste");
}

bot();
