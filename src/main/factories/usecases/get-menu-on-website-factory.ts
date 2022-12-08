import { GetMenuOnWebsite } from "@/data/useCases";
import { IGetMenuOnWebsite } from "@/domain/useCases";

export const makeGetMenuOnWebSite = ():IGetMenuOnWebsite =>{
   return new GetMenuOnWebsite()
}