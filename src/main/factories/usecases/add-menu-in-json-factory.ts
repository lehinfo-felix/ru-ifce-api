import { AddMenuInJson } from "@/data/useCases/AddMenuInJson";
import { IAddMenuInJson } from "@/domain/useCases";
import {makeGetMenuOnWebSite} from './'

export const makeAddMenuInJson  = (): IAddMenuInJson => {
  return new AddMenuInJson(makeGetMenuOnWebSite())
}