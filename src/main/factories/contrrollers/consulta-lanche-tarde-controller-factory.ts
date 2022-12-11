import { ConsultaLancheTardeController } from "@/presetation/controllers"
import { makeGetMenu } from "../usecases"


export const makeConsultaLancheTardeContrller = ()=>{
  return new ConsultaLancheTardeController(makeGetMenu())
}