
import { Controller } from "@/presetation/protocols/controller";
import { ConsultaAlmocoController } from '@/presetation/controllers'
import { makeGetMenuOnJson, makeGetMenuByType} from '../usecases/index'

export const makeConsultaAlmocoController = (): Controller =>{
  const controller = new ConsultaAlmocoController(makeGetMenuOnJson(), makeGetMenuByType())
  return controller;
}