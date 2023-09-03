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

function cadastro(req, res) {
    let erro = req.query.erro || '';
    if (erro == 1) {
        erro = 'Já existe um usuário com esse email';
    } else if (erro == 2) {
        erro = 'Senhas não conferem';
    }
    
    res.locals.layoutVariables = {
        url: process.env.URL,
        title: "Cadastro"
    };
    res.render('cadastro', { erro });
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

async function cadastrar(req, res) {
    console.log(req.body);
    const { nome, email, senha, senha2 } = req.body;
    
    if (senha !== senha2) {
        console.log('Senhas não conferem');
        res.redirect('/cadastro?erro=2');
    } else {
        let resp = await usuarioModel.cadastrarUsuario(nome, email, senha);
        if (resp === false) {
            console.log('Usuário já existe');
            res.redirect('/cadastro?erro=1');
        } else if (resp.affectedRows > 0) {
            console.log('Usuário cadastrado');
            res.redirect('/login?erro=2');
        } else {
            console.log('Erro ao cadastrar usuário');
            res.redirect('/cadastro');
        }
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
