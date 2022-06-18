

const express = require('express');
const app=express();
const port=3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port,  () => {
    console.log(`Server is listening on ${port}`)
})




// app.use(bodyParser.urlencoded({extended: true}))

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + "/index.html")
// })

// app.post('/quotes', (req, res) => {
//     console.log(req.body)
// })


// // // mongoclient has a connect method tied to the particular db via username & pw in the connection string that's generated 

// MongoClient.connect(connectionString, (err, client) => {
//     mongodb+srv//dolankait:<superfreak>@cluster0.itf5l.mongodb.net/star-wars?retryWrites=true&w=majority
// } ) 

// MongoClient.connect(connectionString, (err, _client) => {
//     if(err) return console.log(err)
//     console.log('Connected to Database')
// })