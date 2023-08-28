const mysql = require ('mysql2/promise')

async function connect(){
const connection = await mysql.createConnection({
    host: 'mysql.infocimol.com.br',
    port: 3308, 
    user: 'infocimol05',
    password: 'criart123',
    database: 'Criart'
})
console.log("conectou")
return connection
}

const allItems = async () => {
    const connection = await connect()
    const [query] = await connection.execute(`SELECT * FROM usuario`) //chama todos os elementos da tabela user do banco Criart
    return query
}

module.exports = allItems;

//'query' devolve um array com as respostas

//'execute' permite enviar um parametro string de comando sql e retorna oq foi pedido

//'await' pede para só continuar quando tiver resposta do banco
//'async' sincroniza banco e tela / referente ao item acima