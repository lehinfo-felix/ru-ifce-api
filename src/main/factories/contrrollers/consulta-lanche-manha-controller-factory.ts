import { ConsultaLancheManhaController } from "@/presetation/controllers";
import { Controller } from "@/presetation/protocols";
import { makeGetMenu } from "../usecases";



export const makeConsultaLancheManhaController = (): Controller=>{
  return  new ConsultaLancheManhaController(makeGetMenu())
}