import { HttpResponse } from "../protocols/http";

export const responseServerError = (error: Error): HttpResponse=>{
   return{
      statusCode: 500,
      body: error
      
   }
}


export const responseNotFoundMenu = (menu: string): HttpResponse=>{
  return{
     statusCode: 500,
     body: {message: `Não foi encontrato refeições para ${menu}`}
     
  }
}

export const sucessResponse  = (data: any): HttpResponse=> {
  return{
     statusCode:200,
     body: data
  }
}

export const timeResponse = (): HttpResponse=>{
  return {
     statusCode: 200,
     body: {message: `Olá, As consultas de refeições estão disponíveis apenas de segunda a sexta`}
  }
}