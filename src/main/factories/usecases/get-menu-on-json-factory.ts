import { IGetMenuOnJson } from "@/domain/useCases/GetMenuOnJson";
import { GetMenuOnJson } from '../../../data/useCases'

export const makeGetMenuOnJson = (): IGetMenuOnJson =>{
 return new GetMenuOnJson()
}