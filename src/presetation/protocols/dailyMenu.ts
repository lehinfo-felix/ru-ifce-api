

export interface Menu {
   name: string
   description: string
   startTime: string
   endTime: string
 

}

export interface MenuReady{
   data: Menu[],
   updateAt: string

}