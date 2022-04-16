const express = require('express')
const bodyParser= require('body-parser')
const app= express()
const PORT = 8000



// express listen() method w/ template literal 
app.listen(PORT,  () => {
    console.log(`Server is listening on ${PORT}`)
})


app.use(bodyParser.urlencoded({extended: true}))

// CRUD handlers

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/quotes', (req, res) => {
    console.log(req.body)
})

