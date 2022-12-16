import { Menu } from "@/presetation/protocols";
import { typesMenu } from "./GetMenuByType";

export interface IGetMenu {
  get: (type: typesMenu)=> Promise<Menu | {}>
}