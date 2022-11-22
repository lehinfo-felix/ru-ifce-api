import { Request, Response } from "express";
import puppeteer from "puppeteer";
import { isWeekend } from "../helpers/isWeekend";
class ConsultasController {
  async consultaAlmoco(req: Request, res: Response) {
    if (isWeekend()) {
      res
        .status(200)
        .json({
          mensage:
            "Olá, As consultas de refeições estão disponíveis apenas de segunda a sexta!",
        });
      return;
    }
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto("https://ru.cedro.ifce.edu.br/sign-in");
    await page.type('[name="email"]', "lehinfo.felix@gmail.com");
    await page.type('[name="password"]', "123456");
    await page.click(".App1-MuiButton-label");
    await page.waitForNavigation();

    function retornarDadosDaRefeicao(callback: Function) {
      setTimeout(() => {
        page.waitForSelector(".App1-MuiCardContent-root").then(() => {
          page
            .evaluate(() => {
              return (document.querySelectorAll(
                ".App1-MuiCardContent-root"
              )[1].id = "refeicoes");
            })
            .then(async () => {
              const div = await page.waitForSelector("#refeicoes > div");
              const text3 = await div?.getProperty("textContent");
              console.log(await text3?.jsonValue());
              text3?.jsonValue().then((e) => callback(e));
            });
        });
      }, 500);
    }
    function callbackDados(refeicao: string) {
      res.json(refeicao);
    }

    retornarDadosDaRefeicao(callbackDados);
  }

  consultaLancheManha(req: Request, res: Response) {
    if (isWeekend()) {
      res
        .status(200)
        .json({
          mensage:
            "Olá, As consultas de refeições estão disponíveis apenas de segunda a sexta!",
        });
    }
    res.json("lanche manhã");
  }

  consultaLancheTarde(req: Request, res: Response) {
    if (isWeekend()) {
      res
        .status(200)
        .json({
          mensage:
            "Olá, As consultas de refeições estão disponíveis apenas de segunda a sexta!",
        });
    }
    res.json("lanche tarde");
  }

  consultaLancheNoite(req: Request, res: Response) {
    if (isWeekend()) {
      res
        .status(200)
        .json({
          mensage:
            "Olá, As consultas de refeições estão disponíveis apenas de segunda a sexta!",
        });
    }
    res.json("lanche noite");
  }
}

export default new ConsultasController();
