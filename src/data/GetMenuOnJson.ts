import { IGetMenuOnJson } from "@/domain/useCases";
import   fs  from 'fs'

export class GetMenuOnJson implements IGetMenuOnJson {

async handle () {
   const menuReady =  JSON.parse(fs.readFileSync('./refeicoes.json').toString());  

   return {
      data: JSON.parse(menuReady.data),
      updateAt: menuReady.updateAt
   }
};
}