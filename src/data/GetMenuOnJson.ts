
import fs from 'fs'
import { IGetMenuOnJson } from 'src/domain/useCases/GetMenuOnJson'

class GetMenuOnJson implements IGetMenuOnJson {
   handle(name: string) {
      const refeicoes: MenuReady = JSON.parse(fs.readFileSync('refeicoes.json').toString())

   }

}