const db = require("../db")

class Autor {
  static async selecionar(){
    const connect = await db.connect(); //conexão com o banco
    return await connect.query("select * from autores");
  }

  static async inserir(data){
    const connect = await db.connect();
    const sql = "insert into autores (nome, sobrenome, data_de_nascimento) values ($1, $2, $3)";
    const values = [data.nome, data.sobrenome, data.datanascimento]
    return await connect.query(sql, values);
  }
}
module.exports = Autor;