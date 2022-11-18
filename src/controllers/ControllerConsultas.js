import consultarAlmoço, {consultarAlmoco} from '../scripts/consultas/consultaAlmoco'

class Consultas {
  async almoco(req, res) {
    await consultarAlmoco()
  }

  async lancheManha(req, res) {}

  async lancheTarde(req, res) {}

  async lancheNoite(req, res) {}
}
export default new Consultas();

