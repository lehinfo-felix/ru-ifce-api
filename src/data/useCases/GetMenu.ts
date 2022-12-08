import { IGetMenu, IGetMenuByType, IGetMenuOnJson , IAddMenuInJson, typesMenu} from "@/domain/useCases";
import { getTodayPtBr, verifyIfExistsJson } from './utils'

export class GetMenu implements IGetMenu {
  constructor(
    private readonly getMenuOnJson: IGetMenuOnJson,
    private readonly getMenuByType: IGetMenuByType,
    private readonly addMenuInJson: IAddMenuInJson,
    ){}
  async get (type: typesMenu)  {
     console.log('entoru no getMenu')

    const jsonExists = await verifyIfExistsJson()
    console.log(jsonExists)
    if(jsonExists){
      const menus = await this.getMenuOnJson.handle();
      if(menus.updateAt == getTodayPtBr()) {
       return  this.getMenuByType.handler(type, menus.data)
      }else{
       const isSucess = await this.addMenuInJson.handle();
       if(isSucess){
        const menu = await this.getMenuOnJson.handle()
        return this.getMenuByType.handler('al', menu.data);
       }
      }
    }else{
      const isSucess = await this.addMenuInJson.handle();
       if(isSucess){
        const menu = await this.getMenuOnJson.handle()
        return this.getMenuByType.handler('al', menu.data);
       }
    }

     return {}

  };
}