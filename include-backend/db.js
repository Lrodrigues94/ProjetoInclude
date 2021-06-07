const mysql = require('mysql2');
const obterConexao = () => {
  return mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  });
}

const listar = (callback) => {
  const conexao = obterConexao();
  conexao.query(
    'SELECT * FROM tb_tarefas',
    (erro, resultado) => {
      console.log(`resultado: ${resultado}`)
      callback(resultado)
    }
  );
}

const inserir = (tarefa, callback) => {
  const conexao = obterConexao();
  console.log(tarefa);
  conexao.execute(
    'INSERT INTO tb_tarefas (data, descricao, valor, tipo) VALUES (?, ?, ?, ?)',
    [tarefa.data, tarefa.descricao, tarefa.valor, tarefa.tipo],
    (erro, resultado) => {
      callback(resultado);
    }
  );
}

const atualizar = (tarefa, callback) => {
  const conexao = obterConexao();
  console.log(tarefa);
  conexao.execute(
    'UPDATE tb_tarefas SET tipo = ? WHERE id = ?',
    [tarefa.tipo, tarefa.id],
    (erro, resultado) => {
      callback(resultado);
    }
  );
}

module.exports = {
  listar, inserir, atualizar
}