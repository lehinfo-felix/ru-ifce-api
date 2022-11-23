import { HttpResponse } from "../protocols/http"

export const timeResponse = (): HttpResponse=>{
   return {
      statusCode: 200,
      body: {message: `Olá, As consultas de refeições estão disponíveis apenas de segunda a sexta`}
   }
}