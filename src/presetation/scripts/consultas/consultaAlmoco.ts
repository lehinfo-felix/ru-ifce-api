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

  const text = page.evaluate(() => {
    //return document.querySelector("#refeicoes")?.textContent

    let title : any =  document.querySelector("#refeicoes > p")?.innerHTML

    let refeicaoUm: string = document.querySelectorAll("#refeicoes > div")[0]?.innerHTML
    let refeicaoDois: any = document.querySelectorAll("#refeicoes > div")[1]?.innerHTML
    let refeicaoTres: any = document.querySelectorAll("#refeicoes > div")[2]?.innerHTML
    let refeicaoQuatro: any = document.querySelectorAll("#refeicoes > div")[3]?.innerHTML

    let descart : string = `<p class="\App1-MuiTypography-root jss11 App1-MuiTypography-body1 App1-MuiTypography-colorTextPrimary\">`
// <p class="App1-MuiTypography-root jss11 App1-MuiTypography-body1 App1-MuiTypography-colorTextPrimary">
    let refeicaoUmReplaced : string = refeicaoUm.replace(descart, '')

    let refeicaoUmSplited : string = refeicaoUmReplaced.split('</p>').join('')

    return refeicaoUmSplited
  });
return text
};
