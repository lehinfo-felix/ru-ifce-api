import { IGetMenuOnJson } from "@/domain/useCases";
import env from "@/main/config/env";
import   fs  from 'fs'
import { join } from "path";

export class GetMenuOnJson implements IGetMenuOnJson {

async handle () {
   const menuReady =  JSON.parse(fs.readFileSync(join(__dirname, '../../main/docs/menu.json')).toString()); 
   if(menuReady){

      return {
         data: JSON.parse(menuReady.data),
         updateAt: menuReady.updateAt
      }
   }
};
}