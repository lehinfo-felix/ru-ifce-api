import login from '../scripts/login/login'

class Consultas {
  async almoco(req, res) {
  
    await login()
    

  }

  async lancheManha(req, res) {}

  async lancheTarde(req, res) {}

  async lancheNoite(req, res) {}
}
export default new Consultas();

