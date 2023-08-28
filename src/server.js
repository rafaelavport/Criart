const express = require ('express')
const allItems = require ('./allitems')
const app = express()

app.use(express.json())

const PORT = 3001;

app.listen(PORT, () => {console.log(`funcionando na porta ${PORT}`)})

app.get('/', async (req,res) => {
    console.log('rodando')
    const query = await allItems();
    return res.status(201).json(query);
})

//npm run dev pra rodar