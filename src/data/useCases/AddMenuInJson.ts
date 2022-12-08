import fs from 'fs'
import { Menu } from '@/presetation/protocols';
import { removeFirstName, getTodayPtBr } from '@/presetation/utils';
import { IGetMenuOnWebsite, IAddMenuInJson } from '@/domain/useCases'
import env from '@/main/config/env';
import { join } from 'path';



export class AddMenuInJson implements IAddMenuInJson {

   private readonly getMenuOnWebSite: IGetMenuOnWebsite
   constructor(GetMenuOnWebSite: IGetMenuOnWebsite) {
      this.getMenuOnWebSite = GetMenuOnWebSite;
   }
   async handle() {
      
      async function callbackDados(menu: Menu[]) {
         const menuReady = removeFirstName(menu);
         fs.writeFileSync(join(__dirname, '../../main/docs/menu.json'),
            JSON.stringify(
               {
                  data: JSON.stringify(menuReady),
                  updateAt: getTodayPtBr()
               }))

         return true
      }

      return  this.getMenuOnWebSite.handle(callbackDados)
   }
}


