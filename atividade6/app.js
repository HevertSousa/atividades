const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 8000

app.use(express.static('views'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/',(req, res)=>{
    res.sendFile(__dirname+'/views/index.html')
})

app.post('/views/dados',(req, res)=>{
    const dados = req.body
    res.render('dados',{dados})
})

app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})