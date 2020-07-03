const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const app = express()
mongoose.connect('mongodb+srv://aircnc:aircnc@aircnc-euehg.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// GET, POST, PUT E DELETE
// req.query - acessa query params (para filtrar)
// req.params - acessa route params (para adição e deleção)
// req.body - acessa o corpo da requisição (para criação e edição)

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333, () => {
    console.log("Back-end running in http://localhost:3333/")
})