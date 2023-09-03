const mysql = require('mysql2/promise');

async function connect() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: '',
      database: 'Criart'
    });
    console.log('Conexão estabelecida com sucesso');
    return connection;
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    throw error;
  }
}

async function query(sql) {
  const connection = await connect();
  try {
    const [rows] = await connection.execute(sql);
    console.log('Query executada com sucesso');
    return rows;
  } catch (error) {
    console.error('Erro ao executar a query:', error);
    throw error;
  } finally {
    if (connection) {
        connection.end();
        console.log('Conexão encerrada');
    }
  }
}

module.exports = {query};