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

  static async atualizar(data, id){
    const connect = await db.connect();
    const sql = "update autores set nome = $1, sobrenome = $2, data_de_nascimento = $3 where id = $4";
    const values = [data.nome, data.sobrenome, data.datanascimento, data.id]
    return await connect.query(sql, values);
  }

  static async deletar(id){
    const connect = await db.connect();
    const sql = "delete from autores where id = $1";
    return await connect.query(sql, [id]);
  }

  static async livros_(id){
    const connect = await db.connect();
    const sql = "select * from livros where autor = $1";
    return await connect.query(sql, [id])
  }
}
module.exports = Autor;