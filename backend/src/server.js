const express = require('express')
const routes = require('./routes')

const app = express()

// GET, POST, PUT E DELETE
// req.query - acessa query params (para filtrar)
// req.params - acessa route params (para adição e deleção)
// req.body - acessa o corpo da requisição (para criação e edição)

app.use(express.json())
app.use(routes)

app.listen(3333, () => {
    console.log("Back-end running in http://localhost:3333/")
})