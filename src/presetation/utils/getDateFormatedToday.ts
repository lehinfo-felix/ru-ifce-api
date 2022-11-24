export const getTodayPtBr = ()=>{
   const today = new Date()

   return `${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`
}