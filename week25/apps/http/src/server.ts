import express from 'express'

const app = express();

app.get("/",async function (req,res) {
    res.send("You've reached the http package / endpoint")
})

app.listen(3001);