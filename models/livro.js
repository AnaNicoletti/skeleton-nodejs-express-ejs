const db = require("../db")

class Livro {
  static async selecionar_livro(){
    const connect = await db.connect();
    return await connect.query("select * from livros");
  }

  static async inserir_livro(data){
    const connect = await db.connect();
    const sql = "insert into livros(nome, autor, editora, datapublicacao, preco) values($1, $2, $3, $4, $5)";
    const values = [data.nome, data.autor, data.editora, data.datapublicacao, data.preco]
    return await connect.query(sql, values);
  }
}
module.exports = Livro;