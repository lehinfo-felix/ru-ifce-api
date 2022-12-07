import { IGetMenuByType } from "@/domain/useCases";
import { GetMenuByType } from "@/data";
export const makeGetMenuByType = (): IGetMenuByType=>{
  return new GetMenuByType()
}