import { ConsultaLancheNoiteController } from "@/presetation/controllers"
import { Controller } from "@/presetation/protocols"
import { makeGetMenu } from "../usecases"

export const makeConsultaLancheNoiteController = (): Controller => {
  return new ConsultaLancheNoiteController(makeGetMenu())
}