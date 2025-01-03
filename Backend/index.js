//server creation code
var express = require('express')
var app = express()
const PORT = 3001
app.get('/', (req, res) => {
    res.send("Welcome")
})
app.get('/json',(req,res)=>{
    res.json({server:"Welcome to Backend",url:"Loclhost",port:{PORT}})
})
app.get('/static',(req,res)=>{
    res.sendFile('C:\Users\Sudheeksha\Documents\placement\index.html')
})
app.listen(PORT, () => {
    console.log(`Backend Server Started\nUrl: http://localhost:${PORT}`)
})
