const express = require('express')
const app = express()
const PORT = 3001
const limitter = require("express-rate-limit")

app.use(limitter({
    windowMs: 5000,
    max: 5,
    message: {
        code: 429,
        message: "Hey stop it!"
    } 
}))

app.get('/', (req,res) => {
res.send('Home Page')
})

app.get('/search', (req,res)=>{
    res.send("search page")
})

app.listen(process.env.PORT || 3001, ()=>{
console.log('Server start on port : ', PORT);
})