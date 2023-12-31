const express = require('express'); 
const app = express(); 
require('dotenv').config();
const bodyParser = require('body-parser');
const session = require('express-session');
const mysql = require('mysql2');
const path = require('path');
const md5 = require('md5');

//conexãp banco de dados
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
  
  //rota login
  app.get('/', (req, res) => {
    res.render('login');
  });

  //rota cadastro
  app.get('/cadastro', (req, res) => {
    res.render('cadastro');
  });

  //rota home
  app.get('/home', (req, res) => {
    res.render('home');
  });

  //rota personagem
  app.get('/personagem', (req, res) => {
    res.render('personagem');
  });

  //rota cabelos
  app.get('/cabelos', (req, res) => {
    res.render('cabelos');
  });

  //rota tabela atributos
  app.get('/tabela', (req, res) => {
    res.render('tabela');
  });

  //rota salvar
  app.get('/salvar', (req, res) => {
    res.render('salvar');
  });
  
  //login
  app.post('/login', async (req, res) => {
    const { email, senha } = req.body;
  
    try {
      const checkUserQuery = `SELECT * FROM usuario WHERE email = ? AND senha = ?`;
  
      connection.query(checkUserQuery, [email, md5(senha)], (err, results) => {
        if (err) {
          console.error('Erro na consulta ao banco de dados: ' + err.message);
          res.status(500).send('Erro interno no banco de dados');
          return;
        }
  
        if (results.length > 0) {
          // Usuário encontrado, redirecione para a página de home ou realize alguma ação de login.
          res.redirect('/home');
        } else {
          res.status(401).send('Credenciais inválidas. Verifique seu email e senha.');
        }
      });
    } catch (err) {
      console.error('Erro no login do usuário: ' + err.message);
      res.status(500).send('Erro no login');
    }
  });

  //cadastro
  app.post('/cadastro', async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const checkUserQuery = `SELECT * FROM usuario WHERE email = ?`;

    connection.query(checkUserQuery, [email], (err, results) => {
      if (err) {
        console.error('Erro na consulta ao banco de dados: ' + err.message);
        res.status(500).send('Erro na consulta ao mysql');
        return;
      }

      if (results.length > 0) {
        res.send('Nome de usuário já existe. Escolha outro nome de usuário.');
      } else {
        const insertUserQuery = `INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)`;
        const hashedsenha = md5(senha);

        connection.query(insertUserQuery, [nome, email, hashedsenha], (err, result) => {
          if (err) {
            console.error('Erro na inserção do usuário: ' + err.message);
            res.status(500).send('Erro na inserção');
            return;
          }

          console.log('Usuário cadastrado com sucesso.');
          res.redirect('/home');
          
        });
      }
    });
  } catch (err) {
    console.error('Erro no cadastro do usuário: ' + err.message);
    res.status(500).send('Erro no cadastro de user');
  }
});

  //app.listen(10000, () => {
    //console.log('Servidor rodando em http://0.0.0.0:10000')
  //})

  app.listen(3400, () => {
    console.log('Servidor rodando em http://localhost:3400');
  });