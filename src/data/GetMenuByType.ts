import { IGetMenuByType, typesMenu } from "@/domain/useCases";
import { Menu } from "@/presetation/protocols/dailyMenu";

export class GetMenuByType implements IGetMenuByType {

  handler(type: typesMenu, menu: Menu[]) {
    let result: Menu | {} = {}

    if (menu.length > 0) {
      if (type === 'lm') {
        for (let index = 0; index < menu.length; index++) {
          if (menu[index].name === 'Lanche da Manhã') {
            result = menu[index]
          }
        }
      }

      if (type === 'al') {
        for (let index = 0; index < menu.length; index++) {
          if (menu[index].name === 'Almoço') {
            result = menu[index]
          }
        }
      }

      if (type === 'lt') {
        for (let index = 0; index < menu.length; index++) {
          if (menu[index].name === 'Lanche da tarde') {
            result = menu[index]
          }
        }
      }

      if (type === 'ln') {
        for (let index = 0; index < menu.length; index++) {
          if (menu[index].name === 'Lanche da Noite') {
            result = menu[index]
          }
        }
      }
    }

    return result
  }
}