const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();
const PORT = process.env.PORT || 3000;

const db = mysql.createPool({
    host: 'mysql.infocimol.com.br',
    user: 'infocimol05',
    password: 'criart123',
    database: 'Criart'
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', './layouts/default/login');

app.get('/', (req, res) => {
    usuarioController.login(req, res);
});

app.get('/', async (req, res) => {
    const { email, senha } = req.body;

    try {
        const [rows] = await db.execute('SELECT * FROM usuario WHERE email = ? AND senha = ?', [email, senha]);

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
    console.log(`Servidor rodando na porta ${PORT}`);
});

