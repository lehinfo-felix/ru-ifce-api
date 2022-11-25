import { Menu } from "src/presetation/protocols/dailyMenu";

export interface IGetMenuOnWebsite {
   handle: (callback: Function) => Promise<any>
}