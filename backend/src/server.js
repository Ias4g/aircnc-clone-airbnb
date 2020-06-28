const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.json({ nome: "Izael", sobrenome: "alves da silva", idade: "27 anos", estadocivil: "solteiro" })
})

app.listen(3333, () => {
    console.log("Back-end running in http://localhost:3333/")
})