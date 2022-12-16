import { GetMenuOnWebsite } from "@/data/useCases";
import { IGetMenuOnWebsite } from "@/domain/useCases";
import { makeInformaitonWebSite } from "../prividers/make-get-informations-webg-prvider";

export const makeGetMenuOnWebSite = ():IGetMenuOnWebsite =>{
   return new GetMenuOnWebsite(makeInformaitonWebSite())
}