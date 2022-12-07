import { IGetMenuOnWebsite } from "@/domain/useCases";
import puppeteer from "puppeteer-core";
import { executablePath } from "puppeteer";
import { Menu } from "@/presetation/protocols";

export class GetMenuOnWebsite implements IGetMenuOnWebsite {
  async handle(callback) {
    const browser = await puppeteer.launch({
      headless: true,
      executablePath: executablePath(),
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
            return (document.querySelectorAll(
              ".App1-MuiCardContent-root"
            )[1].id = "refeicoes");
          })
          .then(async () => {
            page
              .evaluate(() => {
                return {
                  menuOne: {
                    name: document.querySelectorAll("#refeicoes > div")[0]
                      ?.childNodes[0]?.textContent,
                    description:
                      document.querySelectorAll("#refeicoes > div")[0]
                        ?.childNodes[1]?.textContent,
                    startTime:
                      document.querySelectorAll("#refeicoes > div")[0]
                        ?.childNodes[2]?.textContent,
                    endTime:
                      document.querySelectorAll("#refeicoes > div")[0]
                        ?.childNodes[3]?.textContent,
                  },

                  menuTwo: {
                    name: document.querySelectorAll("#refeicoes > div")[1]
                      ?.childNodes[0]?.textContent,
                    description:
                      document.querySelectorAll("#refeicoes > div")[1]
                        ?.childNodes[1]?.textContent,
                    startTime:
                      document.querySelectorAll("#refeicoes > div")[1]
                        ?.childNodes[2]?.textContent,
                    endTime:
                      document.querySelectorAll("#refeicoes > div")[1]
                        ?.childNodes[3]?.textContent,
                  },
                  menuThree: {
                    name: document.querySelectorAll("#refeicoes > div")[2]
                      ?.childNodes[0]?.textContent,
                    description:
                      document.querySelectorAll("#refeicoes > div")[2]
                        ?.childNodes[1]?.textContent,
                    startTime:
                      document.querySelectorAll("#refeicoes > div")[2]
                        ?.childNodes[2]?.textContent,
                    endTime:
                      document.querySelectorAll("#refeicoes > div")[2]
                        ?.childNodes[3]?.textContent,
                  },
                  menuFor: {
                    name: document.querySelectorAll("#refeicoes > div")[3]
                      ?.childNodes[0]?.textContent,
                    description:
                      document.querySelectorAll("#refeicoes > div")[3]
                        ?.childNodes[1]?.textContent,
                    startTime:
                      document.querySelectorAll("#refeicoes > div")[3]
                        ?.childNodes[2]?.textContent,
                    endTime:
                      document.querySelectorAll("#refeicoes > div")[3]
                        ?.childNodes[3]?.textContent,
                  },
                };
              })
              .then(async (menu) => {
                console.log(menu);
                const menuReady: Menu[] = [];

                if (Object.keys(menu.menuOne).length === 4)
                  menuReady.push(menu.menuOne as Menu);
                if (Object.keys(menu.menuTwo).length === 4)
                  menuReady.push(menu.menuTwo as Menu);
                if (Object.keys(menu.menuThree).length === 4)
                  menuReady.push(menu.menuThree as Menu);
                if (Object.keys(menu.menuFor).length === 4)
                  menuReady.push(menu.menuFor as Menu);

                callback(menuReady);
              });
          });
      });
    }, 900);
  }
}
