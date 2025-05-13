const express = require('express')

const app = express();

app.get("/",function (req,res){
    res.json("Hello World! => this is mild hosting example");
})

app.listen(3000);