import fs from 'fs'
import { Menu } from 'src/presetation/protocols/dailyMenu';
import { getTodayPtBr } from 'src/presetation/utils/getDateFormatedToday';
import { removeFirstName } from 'src/presetation/utils/removeFirstName';
import { IAddMenuInJson } from '../domain/useCases/AddMenuJson'
import { IGetMenuOnWebsite } from '../domain/useCases/GetMenuOnWebsite'
import { GetMenuOnWebsite } from './GetMenuOnWebsite';


export class AddMenuInJson implements IAddMenuInJson {

   private getMenuOnWebSite
   constructor(GetMenuInWebsite: IGetMenuOnWebsite) {
      this.getMenuOnWebSite = GetMenuInWebsite;

   }
   async handle() {
      
      function callbackDados(menu: Menu[]) {
         const menuReady = removeFirstName(menu);
         fs.writeFileSync("refeicoes.json",
            JSON.stringify(
               {
                  data: JSON.stringify(menuReady),
                  updateAt: getTodayPtBr()
               }))

         return true
      }

      return new this.getMenuOnWebSite(callbackDados);
   }
}


