// Importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//Inicar o objeto de banco de dados
const db = new sqlite3.Database("./src/database/database.db")

//Exportar arquivo
module.exports = db

//utlizar o objeto de banco de dados para nossa operações

db.serialize(() =>{
  /*
  // Criar uma tabela
  db.run(`
      CREATE TABLE IF NOT EXISTS places(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT, 
        name TEXT,
        address TEXT,
        address2 TEXT,
        state TEXT,
        city TEXT,
        items TEXT
      );
  `)*/

  /*Inserir dados na tabela
  const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
  `
  const values = [
    "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "Perpecite",
    "Gabriela Gomes, Jardin América",
    "Numero 60",
    "Goias",
    "Aparecida de Goiania",
    "Papéis e Papelão"
  ]

  function afterInsertData(err){
    if (err) {
      return console.log(err)
    }

    console.log("Cadastrado com sucesso")
    console.log(this)

  }
  db.run(query,  values, afterInsertData) */


  /*Consultar dados da tabela
  db.all(`SELECT name FROM places`, function (err, rows) {
    if (err) {
      return console.log(err)
    }

    console.log("Aqui estão seus registro:")
    console.log(rows)
  })*/

   /*Deletar um dado da tabela
  db.run(`DELETE FROM places WHERE id = ?`, [6], function(err) {
    if (err) {
      return console.log(err)
    }

    console.log("Registro deletado com sucesso!")

  }) */

  

})
