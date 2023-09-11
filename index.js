const express = require('express'); 
const app = express(); 
require('dotenv').config();
const usuarioController = require('./controllers/usuarioController');
const session = require('express-session');

const connection = mysql.createConnection({
    host: 'mysql27-farm10.kinghost.net',
    user: 'infocimol05@10.19.8.12',
    password: '12345678',
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
    const { username, password } = req.body;
  
    try {
      const checkUserQuery = `SELECT * FROM usuario WHERE username = ?`;
  
      connection.query(checkUserQuery, [username], (err, results) => {
        if (err) {
          console.error('Erro na consulta ao banco de dados: ' + err.message);
          res.status(500).send('Erro interno no 1servidor');
          return;
        }
  
        if (results.length > 0) {
          res.send('Nome de usuário já existe. Escolha outro nome de usuário.');
        } else {
          const insertUserQuery = `INSERT INTO usuario (username, password) VALUES (?, ?)`;
          const hashedPassword = md5(password);
  
          connection.query(insertUserQuery, [username, hashedPassword], (err, result) => {
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

  app.listen(10000, () => {
    console.log('Servidor rodando em http://0.0.0.0:10000')
  })



//app.use(expressLayouts);
//app.set('layout', 'views/layouts/default/login');
//app.set('view engine', 'ejs');

//app.use(express.urlencoded({ extended: true })); 
//app.use(express.static(path.join(__dirname, 'public')));

//app.use((req, res, next) => {
    //if (req.session.usuario) {
       // console.log('Logado');
      //  res.locals.layoutVariables ={
      //      usuario: req.session.usuario
      //  };
      //  next();
    //}else{
       // console.log('Não logado');
       // if(req.url == '/cadastro' || req.url == '/perfil' || req.url == '/logout'){
        //    res.redirect('/login?erro=2');
      //  }else{
       //     res.locals.layoutVariables ={
       //         usuario: req.session.usuario
       //     };
       //     next();
      //  }
  //  }
//});

//app.get('/', (req, res) => {
    //app.set('layout', './layouts/login');
    //res.render('login');
//});



//const express = require('express');
//const bodyParser = require('body-parser');
//const mysql = require('mysql2/promise');

//const app = express();
//const PORT = process.env.PORT || 3000;

// Configuração da conexão com o banco de dados
//const db = mysql.createPool({
   // host: 'mysql.infocimol.com.br',
   // user: 'infocimol05',
   // password: 'criart123',
   // database: 'Criart'
//})

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

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