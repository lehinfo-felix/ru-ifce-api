export const notFoundMenuResponse = (nameMenu: string)=>{
   throw new Error('Não Foi possivel consulta o menu de '+ nameMenu)
}


