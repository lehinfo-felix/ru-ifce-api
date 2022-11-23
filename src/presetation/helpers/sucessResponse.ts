import { HttpResponse } from "../protocols/http"

export const sucessResponse  = (data: any): HttpResponse=> {
   return{
      statusCode:200,
      body: data
   }
}