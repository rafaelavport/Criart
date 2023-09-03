const express = require('express'); 
const app = express(); 
const port = 3000; 
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const dotenv = require('dotenv').config();
const path = require('path');
const usuarioController = require('./controllers/usuarioController');
const personagemController = require('./controllers/personagemController');

app.use(session({secret: 'chaveSecretaDemais'}));

app.use(expressLayouts);
app.set('layout', 'views/layouts/default/login');
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    if (req.session.usuario) {
        console.log('Logado');
        res.locals.layoutVariables ={
            usuario: req.session.usuario
        };
        next();
    }else{
        console.log('Não logado');
        if(req.url == '/cadastro' || req.url == '/perfil' || req.url == '/logout'){
            res.redirect('/login?erro=2');
        }else{
            res.locals.layoutVariables ={
                usuario: req.session.usuario
            };
            next();
        }
    }
});

app.get('/', (req, res) => {
    app.set('layout', './layouts/default/login');
    res.render('login');
});

//app.get('/login', (req, res) => {
    //app.set('layout', './layouts/default/login');
    //usuarioController.login(req, res);
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

//app.listen(PORT, () => {
    //console.log(`Servidor rodando na porta ${PORT}`);
//});