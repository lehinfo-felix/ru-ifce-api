import { Menu } from "src/presetation/protocols/dailyMenu";

export interface IGetMenuOnJson {
   handle: (name: string)=> Promise<Menu>
}