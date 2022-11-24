import {  Menu, MenuReady } from "../protocols/dailyMenu";

export const removeFirstName = (data: Menu[]): Menu[]=>{
   const today = new Date()
   const todayPtBr = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}T`
  
   return data.map((el): Menu =>{
      const timeStart = el.startTime.replace('Horário de inicio : ','')
      const timeEnd = el.endTime.replace('Horário de fim: ','')
      console.log(`${todayPtBr}${timeEnd}`)
     
      return {
         name: el.name.replace('Refeição : ', '') as string,
         description: el.description.replace('Descrição : ', ''),
         startTime: new Date(`${todayPtBr}${timeStart}`).toString(),
         endTime: new Date(`${todayPtBr}${timeEnd}`).toString(),
      }
     
   })

}