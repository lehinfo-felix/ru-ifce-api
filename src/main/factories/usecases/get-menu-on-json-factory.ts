import { IGetMenuOnJson } from "@/domain/useCases/GetMenuOnJson";
import {GetMenuOnJson} from '../../../data'

export const makeGetMenuOnJson = (): IGetMenuOnJson =>{
 return new GetMenuOnJson()
}