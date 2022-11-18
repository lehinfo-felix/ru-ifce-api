import puppeteer from "puppeteer";

async function bot() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://ru.cedro.ifce.edu.br/sign-in");

  await page.screenshot({ path: "exemple.png" });

  // const resultado = await page.evaluate(() => {
  //   return {
  //     clickInpurEmail: document
  //       .querySelectorAll(".App1-MuiInputBase-input")[0]
  //       .click(),
  //     inputEmail: (document.querySelectorAll(
  //       ".App1-MuiInputBase-input"
  //     )[0].value = "carlosemannoel2017@gmail.com"),
  //     inputSenha: (document.querySelectorAll(
  //       ".App1-MuiInputBase-input"
  //     )[1].value = "123456"),
  //     clickInpurSenha: document
  //       .querySelectorAll(".App1-MuiInputBase-input")[1]
  //       .click(),
  //     submitEntrar: document.querySelector(".App1-MuiButton-label").click(),
  //   };
  // });



  // const inputEmail = await page.evaluate(() => {
  //   return {
  //     inputEmail: document.querySelectorAll(".App1-MuiInputBase-input")[0].getAttribute('class').toString(),
  //   };
  // });

  // console.log(inputEmail)

  await page.type('[name="email"]', "carlosemannoel2017@gmail.com");
  await page.type('[name="password"]', "123456");
  await page.click('.App1-MuiButton-label')
 

  const almoço = await page.evaluate(() => {
    return {
      clickInpurEmail: document
        .querySelectorAll(".App1-MuiTypography-root")[0]
    };
   });

   console.log(almoço)



  // const clickInputSenha = await page.evaluate(() => {
  //   return {
  //     clickInpurSenha: document
  //       .querySelectorAll(".App1-MuiInputBase-input")[1]
  //       .click(),
  //   };
  // });

  // const setInputSenha = await page.evaluate(() => {
  //   return {
  //     inputSenha: (document.querySelectorAll(
  //       ".App1-MuiInputBase-input"
  //     )[1].value = "123456"),
  //   };
  // });

  //await browser.close();
}

bot();
