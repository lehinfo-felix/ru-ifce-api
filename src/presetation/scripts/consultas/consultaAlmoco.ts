import puppeteer from "puppeteer";

export const consultaRefeicoes = async (callback: Function) => {
  const browser = await puppeteer.launch({ headless: false });
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
          return (document.querySelectorAll(".App1-MuiCardContent-root")[1].id =
            "refeicoes");
        })
        .then(async () => {
          page
            .evaluate(() => {
              return {
                refeicaoUm: {
                  nome: document.querySelectorAll("#refeicoes > div")[0]
                    ?.childNodes[0]?.textContent,
                  Descricao:
                    document.querySelectorAll("#refeicoes > div")[0]
                      ?.childNodes[1]?.textContent,
                },

                refeicaoDois: {
                  nome: document.querySelectorAll("#refeicoes > div")[1]
                    ?.childNodes[0]?.textContent,
                  Descricao:
                    document.querySelectorAll("#refeicoes > div")[1]
                      ?.childNodes[1]?.textContent,
                },
                refeicaoTres: {
                  nome: document.querySelectorAll("#refeicoes > div")[2]
                    ?.childNodes[0]?.textContent,
                  Descricao:
                    document.querySelectorAll("#refeicoes > div")[2]
                      ?.childNodes[1]?.textContent,
                },
                refeicaoQuatro: {
                  nome: document.querySelectorAll("#refeicoes > div")[3]
                    ?.childNodes[0]?.textContent,
                  Descricao:
                    document.querySelectorAll("#refeicoes > div")[3]
                      ?.childNodes[1]?.textContent,
                },
              };
            })
            .then(async (divs) => {
              console.log("Divs", divs);

              callback(divs);
            });
        });
    });
  }, 900);
};
