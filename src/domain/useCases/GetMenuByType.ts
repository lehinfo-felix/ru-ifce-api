import { Menu } from "@/presetation/protocols";

export type typesMenu = 'al' | 'lt' | 'lm' | 'ln'

export interface IGetMenuByType {
   handler: (type: typesMenu, menu: Menu[]) => Menu | {}
}