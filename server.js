// express is enabled to handle http connection, but it doesn't handle information that comes from a form, so middleware (bodyParser)  is used to gain functionality. 

const express = require ('express')
const app= express()
const bodyParser= require ('body-parser')  
const { MongoClient } = require ('mongodb').MongoClient
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


// // mongoclient has a connect method tied to the particular db via username & pw in the connection string that's generated 

MongoClient.connect(connectionString, (err, client) => {
    mongodb+srv//dolankait:<superfreak>@cluster0.itf5l.mongodb.net/star-wars?retryWrites=true&w=majority
} ) 

MongoClient.connect(connectionString, (err, client) => {
    if(err) return console.log(err)
    console.log('Connected to Database')
})