require('dotenv').config();
const express = require("express");
const app = express();
const port = 8080;
// process.env.PORT

app.get('/',(req,res)=>{res.send("Hello guys")});

app.get('/twitter',(req,res)=>{res.send("Please visit again :)")});

app.get('/login',(req,res)=>{res.send("<h1> Login </h1>")})

app.listen(port,()=>{
  console.log(`Server running at PORT ${port}`);
})