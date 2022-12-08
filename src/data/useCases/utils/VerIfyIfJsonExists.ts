
import { readdirSync } from 'fs'
import { join } from 'path';


export async function verifyIfExistsJson(): Promise<Boolean> {
      let valid = false
      readdirSync(join(__dirname, '../../../main/docs')).forEach( async file => {
         console.log(file)
         if(file === 'menu.json'){
            valid = true
         }
      })
      console.log('verificou')
      return valid
};
