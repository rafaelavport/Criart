const usuarioModel = require('../models/usuarioModel');

function login(req, res) {
    res.locals.login = '.layouts/login.ejs'; 
    res.render('login'); 

    //let erro = req.query.erro || '';
    //if (erro == 1) {
     //   erro = 'Email ou senha incorretos';
    //} else if (erro == 2) {
    //    erro = 'Usuário cadastrado com sucesso';
    //}

    
    res.locals.layoutVariables = {
        url: process.env.URL,
        title: "Login"
    };
}

async function autenticar(req, res) {
    console.log(req.body);
    const { email, senha } = req.body;
    let resp = await usuarioModel.verificarUsuario(email, senha);
    
    if (resp.length > 0) {
        req.session.usuario = {
            id: resp[0].id,
            nome: resp[0].nome,
            email: resp[0].email,
            senha: resp[0].senha
        };
        res.locals.layoutVariables = { usuario: req.session.usuario };
        console.log('Usuário encontrado');
        res.redirect('/');
    } else {
        console.log('Usuário não encontrado');
        res.redirect('/login?erro=1');
    }
}

function perfil(req, res) {
    res.locals.layoutVariables = { usuario: req.session.usuario };
    res.render('perfil');
}

function logout(req, res) {
    delete req.session.usuario;
    res.redirect('/login');
}

module.exports = { login, cadastro, autenticar, cadastrar, logout, perfil };
