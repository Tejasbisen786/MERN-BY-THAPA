const express = require("express");

const router = express.Router();
const authcontrollers= require("../controllers/auth-controllers");

// router.get('/',(req,res)=>{
//     res.send(" Welcome To Router Home page")
// })

router.route("/").get(authcontrollers.home);

router.route("/register").post(authcontrollers.register);


module.exports = router;
