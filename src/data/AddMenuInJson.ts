import fs from 'fs'
import { IAddRefeicaoJson } from 'src/domain/useCases/AddRefeicaoJson';
import { AddRefeicaoJson } from 'src/domain/useCases/addRefeicaoJson';
import { Menu } from 'src/presetation/protocols/dailyMenu';
import { consultaRefeicoes } from 'src/presetation/scripts/consultas/consultaRefeicoes';
import { getTodayPtBr } from 'src/presetation/utils/getDateFormatedToday';
import { removeFirstName } from 'src/presetation/utils/removeFirstName';


export class AddMenuInJson implements IAddRefeicaoJson {
constructor(GetMenu){

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
       const data = consultaRefeicoes(callbackDados).then(()=>{
         return true
       });
       return data
   } 
}


export const saveInJson = ()=>{
   
}



