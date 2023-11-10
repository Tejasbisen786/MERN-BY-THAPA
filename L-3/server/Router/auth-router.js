const express=require("express")

const router=express.Router()


// router.get('/',(req,res)=>{
//     res.send(" Welcome To Router Home page")
// })

router.route("/").get((req,res)=>{
    res.send(" Welcome To Router Home page")
})

router.route("/register").get((req,res)=>{
    res.send("")

})

router.route("/Login").get((req,res)=>{
res.send('Login Page This g Side')
})
module.exports = router;