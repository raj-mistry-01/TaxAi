const express = require("express");
const User = require("../../models/UserCredentials.model.js");

const router = express.Router();


// getId By Mail
router.post("/getUserIdByMail",
    async  (req,res) => {
    console.log("yes")
    console.log(req.body.email)
    let user = await User.find().where({email : req.body.email});
    console.log(user)
    return res.json(user)
})

module.exports =  router;