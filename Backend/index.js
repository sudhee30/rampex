var express = require('express')
var path = require('path')
var mdb = require('mongoose')
var User = require('./models/users')
var app = express()
const PORT = 3001;
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

app.post('/signup', (req, res) => {
    try {
        var newUser = new User(req.body).save();
        console.log(req.body.password)
        res.status(200).send("User Added Succussfully")
    }
    catch (err) {
        console.log(err)
    }
})

app.get('/getsignup', async(req,res) => {
    try{
        var allSignupRecords = await User.find()
        res.json(allSignupRecords)
        console.log("All data fetched")
    }
    catch(err){
        console.log("Cannot able to read the records")
    }
})
app.post('/login', async (req,res)=>{
    var {email,password}=req.body
    try{
        var existingUser = await User.findOne({email:email}) //should use findone strictly
        console.log(existingUser)
       if(!existingUser){
        res.json({message  :"Login unSuccessful",isLoggedin : false})
    }
    else{
        res.json({message  :"Login Successfull",isLoggedin : true})
    }
}
catch(err){
        console.log("Login Failed")
    }
})
app.listen(PORT, () => {
    console.log(`Backend Server Started \n Url: http://localhost:${PORT}`) //listen should always be at the last
})
/// interview qn:debug
//{
  //  _id:  ObjectId('6777a9a6053756ad4f032e83'),        
    //firstName: 'Prathi',
    //lastName: 'Ksha',
    //password: 'Sudhee',
    //email: 'Prathi@gmail.com',
   //// __v: 0
 // }
 /*  ans is that new keyword should be there
 {
    _id: new ObjectId('6777a9a6053756ad4f032e83'),
    firstName: 'Prathi',
    lastName: 'Ksha',
    password: 'Sudhee',
    email: 'Prathi@gmail.com',
    __v: 0
  }*/