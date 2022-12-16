// import fs from 'fs'
// import { removeFirstName } from '../utils/removeFirstName';
// import { Menu, MenuReady } from '../protocols/dailyMenu';
// import { getTodayPtBr} from '../utils/getDateFormatedToday'
// import { IGetMenuOnWebsite } from 'src/domain/useCases/GetMenuOnWebsite';
// import { IAddMenuInJson } from 'src/domain/useCases/AddMenuJson';
// import { GetMenuOnWebsite } from 'src/data/GetMenuOnWebsite';
// export class SaveMenuInJson implements IAddMenuInJson{
//    constructor(GetMenuOnWebsite: IGetMenuOnWebsite){}
//    handle(){
//       function callback(menu: Menu[]) {
//          const menuReady = removeFirstName(menu);
//          fs.writeFileSync("refeicoes.json", 
//          JSON.stringify(
//             {
//                data: JSON.stringify(menuReady), 
//                updateAt: getTodayPtBr()
//             }))
//         return true
//        }
//        const getMenuOnWebsite =  new GetMenuOnWebsite()
//        return getMenuOnWebsite.handle(callback).then(()=>{
//          return true
//        })
//    };
// }
//# sourceMappingURL=addRefeicoesInJson.js.map