var express = require('express')
var path = require('path')
var mdb = require('mongoose')
var User = require('./models/users')
var app = express()
const PORT = 3001
app.use(express.json())
mdb.connect("mongodb://127.0.0.1:27017/kec").then(() => {
    console.log("MongoDB connection successful")
}).catch(() => {
    console.log("Check your connection string")  //connection string is the url to connect to mongodb
})

app.get('/', (req, res) => {
    res.send("Welcome to Backend Server")
})

app.get('/json', (req, res) => {
    res.json("Welcome to Backend")
})

app.get('/static', (req, res) => {
    console.log("Running")
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/signup', (req,res) => {
    console.log(req.body)
    var {firstName, lastName, email} = req.body
    console.log(firstName, lastName, email)
    try{
        var newUser = new User({
        firstName:firstName,
        lastName:lastName,
        email:email
        })
        newUser.save()
        console.log("User Added Successfully")
        res.status(200).send("User Added Succussfully")
    }
    catch(err){
        console.log(err)
    }
})
app.get('/getsignup',async(req,res)=>{
    try{
        var allSignUpRecords = await User.find()
        res.json(allSignUpRecords)
        console.log("All data fetched")
    }
    catch(err){
        console.log("Cannot able to read the records")
        res.send(err)
    }
})

app.listen(PORT, () => {
    console.log(`Backend Server Started \n Url: http://localhost:${PORT}`) //listen should always be at the last
})