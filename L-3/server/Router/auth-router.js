const express=require("express")

const router=express.Router()


// router.get('/',(req,res)=>{
//     res.send(" Welcome To Router Home page")
// })


router.route("/").get((req,res)=>{
    res.send(" Welcome To Router Home page")
})

router.route("/register").get((req,res)=>{
    res.send(" Welcome To Router Register page")

})


module.exports = router;