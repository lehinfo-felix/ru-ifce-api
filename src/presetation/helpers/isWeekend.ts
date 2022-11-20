export const isWeekend = (): boolean =>{
   const day = new Date().getDay()
   if(day === 6 || day === 7) return true
   return false
}