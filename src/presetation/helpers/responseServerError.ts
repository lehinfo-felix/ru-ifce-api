import { HttpResponse } from "../protocols/http";

export const responseServerError = (error: Error): HttpResponse=>{
   return{
      statusCode: 500,
      body: error
      
   }
}