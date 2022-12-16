import fs from 'fs'
import { Menu } from '@/presetation/protocols';
import { removeFirstName, getTodayPtBr } from '@/presetation/utils';
import { IGetMenuOnWebsite, IAddMenuInJson } from '@/domain/useCases'
import { join } from 'path';

export class AddMenuInJson implements IAddMenuInJson {

   private readonly getMenuOnWebSite: IGetMenuOnWebsite
   constructor(GetMenuOnWebSite: IGetMenuOnWebsite) {
      this.getMenuOnWebSite = GetMenuOnWebSite;
   }
   async handle() {

      async function callbackDados(menu: Menu[]) {
         console.log('Entrou no CallBack')
         const menuReady = removeFirstName(menu);
         console.log('Remover Informações', menuReady)

         await fs.promises.writeFile(join(__dirname, '../../main/docs/menu.json'),
            JSON.stringify(
               {
                  data: JSON.stringify(menuReady),
                  updateAt: getTodayPtBr()
               }))

         console.log('Gravou NO Json')
         return true
      }


      const result = await this.getMenuOnWebSite.handle(callbackDados);

      console.log('resultado da gravação', result)
      return result
   }
}


