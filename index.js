const express = require('express'); 
const app = express(); 
require('dotenv').config();
const bodyParser = require('body-parser');
const session = require('express-session');
const mysql = require('mysql2');
const path = require('path');
const md5 = require('md5');

const connection = mysql.createConnection({
    host: 'mysql27-farm10.kinghost.net',
    user: 'infocimol05',
    password: 'criart123',
    database: 'infocimol05'
});

connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
      return;
    }
    console.log('Conexão ao banco de dados MySQL bem-sucedida');
  });
  
  app.use(express.static('public'));
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));
  
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({
    secret: 'batatinha',
    resave: false,
    saveUninitialized: true
  }));
  
  app.get('/', (req, res) => {
    res.render('login');
  });
  
  app.post('/login', async (req, res) => {
    const { email, senha } = req.body;
  
    try {
      const checkUserQuery = `SELECT * FROM usuario WHERE email = ?`;
  
      connection.query(checkUserQuery, [email], (err, results) => {
        if (err) {
          console.error('Erro na consulta ao banco de dados: ' + err.message);
          res.status(500).send('Erro interno no 1servidor');
          return;
        }
  
        if (results.length > 0) {
          res.send('Nome de usuário já existe. Escolha outro nome de usuário.');
        } else {
          const insertUserQuery = `INSERT INTO usuario (email, senha) VALUES (?, ?)`;
          const hashedsenha = md5(senha);
  
          connection.query(insertUserQuery, [email, hashedsenha], (err, result) => {
            if (err) {
              console.error('Erro na inserção do usuário: ' + err.message);
              res.status(500).send('Erro interno no 2servidor');
              return;
            }
  
            console.log('Usuário cadastrado com sucesso.');
            res.redirect('/cadastro');
            
          });
        }
      });
    } catch (err) {
      console.error('Erro no cadastro do usuário: ' + err.message);
      res.status(500).send('Erro interno no 3servidor');
    }
  });

  app.get('/home', (req, res) => {
    res.render('home');
  });

  app.listen(10000, () => {
    console.log('Servidor rodando em http://0.0.0.0:10000')
  })


// Rota para autenticação
//app.get('/', async (req, res) => {
   //const { email, senha } = req.body;

    //try {
//const [rows] = await db.execute('SELECT * FROM usuario WHERE email = ? AND senha = ?', [email, senha]);
//
   //     if (rows.length > 0) {
   //         res.json({ success: true, message: 'Login bem-sucedido!' });
   //     } else {
   //         res.json({ success: false, message: 'Credenciais inválidas.' });
    //    }
   // } catch (error) {
       // console.error('Erro ao autenticar:', error);
       // res.status(500).json({ success: false, message: 'Erro no servidor.' });
    //}
//});