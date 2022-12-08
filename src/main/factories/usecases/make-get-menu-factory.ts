import { GetMenu } from "@/data/useCases/GetMenu"
import { IGetMenu } from "@/domain/useCases"
import { makeAddMenuInJson, makeGetMenuOnJson, makeGetMenuByType } from "./"

export const makeGetMenu = (): IGetMenu=>{
  return new GetMenu(makeGetMenuOnJson(), makeGetMenuByType(),makeAddMenuInJson())
}