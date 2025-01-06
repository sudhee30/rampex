var express = require ('express')
var path = require('path')
var mdb = require('mongoose')
var user = require('../Backend/models/users')
var cors = require('cors')
const { env } = require('process')
var app = express()
const PORT =3001
app.use(cors())
app.use(express.json())


mdb.connect('mongodb://127.0.0.1:27017/kec', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB connection successful");
}).catch((err) => {
    console.error("Check your connection string:", err);
});


app.get('/',(req,res)=>{
    res.json("welcome to backend")
})

app.get('/volunteering',(req,res)=>{
    res.json({PORT:PORT,url:"localhost"})
})

app.get('/sendfile',(req,res)=>{
    // console.log(__dirname)
    res.sendFile(path.join(__dirname,'index.html'))
})

app.use(cors({
    origin: 'http://localhost:3000', // Adjust the origin as per your frontend
    credentials: true,
}));


app.get('/getsignup', async (req, res) => {
    try {
        const allSignupRecords = await user.find();
        res.status(200).json(allSignupRecords);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});



app.post('/login', async (req, res) => {
    var { email, password } = req.body;

    try {
        const existingUser = await user.findOne({ email });
        console.log(existingUser);

        if (!existingUser) {
            return res.status(404).json({ message: "User not found", isLoggedIn: false });
        }

        if (existingUser.password !== password) {
            return res.status(401).json({ message: "Invalid Credentials", isLoggedIn: false });
        }

        res.status(200).json({ message: "Login successful", isLoggedIn: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error", isLoggedIn: false });
    }
});


app.post('/signup', async (req, res) => {
    var { firstName, lastName, email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await user.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create a new user and save
        const newUser = new user({ firstName, lastName, email, password });
        await newUser.save();

        console.log("User added successfully");
        res.status(201).json({ message: "User added successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


app.listen(PORT,()=>{
    console.log("server started")})


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