const db = require("../db")

class Livro {
  static async selecionar_livro(){
    const connect = await db.connect();
    return await connect.query("select * from livros")
  }
}
module.exports = Livro;