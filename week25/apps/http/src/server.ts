import express from 'express'
import { client } from '@repo/db/prismaClient'

const app = express();
app.use(express.json())

app.get("/",async function (req,res) {
    res.send("You've reached the http package / endpoint")
})

app.post("/signup",async function (req,res) {
    const { username,password } = req.body;
    try{
         await client.user.create({
            data:{
                username: username,
                password: password
            }
         })

        res.json({
            msg: "User Created successfully"
        })
    } catch (e){
        res.status(500).json({
            msg: "Failed to create user"
        })
    }
})

app.get("/user",async function (req,res) {
    const user = await client.user.findFirst()

    res.json({
        user: user
    })
})

app.listen(3000);