import {  Menu, MenuReady } from "../protocols/dailyMenu";

export const removeFirstName = (data: Menu[]): MenuReady[]=>{
   const today = new Date()
   const todayPtBr = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}T`
   console.log(todayPtBr)
   return data.map((el): MenuReady =>{
      const timeStart = el.startTime.replace('Horário de inicio : ','')
      const timeEnd = el.endTime.replace('Horário de fim: ','')
     console.log(`${todayPtBr}${timeEnd}`)
     
      return {
         name: el.name.replace('Refeição : ', '') as string,
         description: el.description.replace('Descrição : ', ''),
         startTime: new Date(`${todayPtBr}${timeStart}`),
         endTime: new Date(`${todayPtBr}${timeEnd}`),
      }
     
   })

}