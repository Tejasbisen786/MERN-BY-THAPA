const express =require('express')

const app=express()
const PORT= process.env.PORT || 3000
const router= require("./Router/auth-router")


//middlewares
app.use(express.json())
// Mount the Route
app.use("/api/auth", router)

// app.get('/',(req,res)=>{
//     res.status(200).send("Welcome TO Home Page")
// })
// app.get('/register',(req,res)=>{
//     res.status(200).send("Welcome TO Register Page")
// })
// app.get('/login',(req,res)=>{
//     res.status(200).send("Welcome TO LOGIN Page")
// })

app.listen(PORT,()=>{
   console.log(`Server is running on ${PORT}`);
})