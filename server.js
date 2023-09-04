const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const PORT = process.env.PORT || 3000;

const usuarioController = require('./controllers/usuarioController');
console.log("0")

const db = mysql.createPool({
    host: 'mysql.infocimol.com.br',
    user: 'infocimol05',
    password: 'criart123',
    database: 'Criart'
});
console.log("1")


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', './layouts/default/login');

app.get('/', (req, res) => {
    usuarioController.login(req, res);
});

app.post('/login', async (req, res) => {
    const { email, senha } = req.body;

    try {
        const connection = await db.getConnection();
        const [rows] = await connection.execute('SELECT * FROM usuario WHERE email = ? AND senha = ?', [email, senha]);
        connection.release();

        if (rows.length > 0) {
            res.json({ success: true, message: 'Login bem-sucedido!' });
        } else {
            res.json({ success: false, message: 'Credenciais inválidas.' });
        }
    } catch (error) {
        console.error('Erro ao autenticar:', error);
        res.status(500).json({ success: false, message: 'Erro no servidor.' });
    }
});

app.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}`);
});

