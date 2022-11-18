import consultarAlmoço from '../scripts/consultas/consultaAlmoco'

class Consultas {
  async almoco(req, res) {
    await Login()
  }

  async lancheManha(req, res) {}

  async lancheTarde(req, res) {}

  async lancheNoite(req, res) {}
}
export default new Consultas();

