
import { Controller } from "@/presetation/protocols/controller";
import { ConsultaAlmocoController } from '@/presetation/controllers'
import { makeGetMenu } from "../usecases";


export const makeConsultaAlmocoController = (): Controller =>{
  const controller = new ConsultaAlmocoController(makeGetMenu())
  return controller;
}