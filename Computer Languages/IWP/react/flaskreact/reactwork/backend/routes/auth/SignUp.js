const express = require("express");
const User = require("../../models/UserCredentials.model.js");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require('express-validator');
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET


// createUser
router.post(
    "/createuser",
    [
        body("name","Enter a valid a name").isLength({min:5}),
        body("email","Enter a valid a email").isEmail(),
        body("age","Enter a valid a password , minimum length is 18").isLength({min:1})
    ],
    async (req,res) => {
        let success = false
        const err = validationResult(req)
        if (!err.isEmpty()) {
            return res.json({success,error : err.array()[0].msg})
        }
        try {
            let user = await User.findOne({email : req.body.email})
            if (user) {
                const  message = "Sorry a user already exists with this email"
                return res.status(400).json({
                    success,
                    error : message,
                })
            } 
            success = true
            user = await User.create({
                name : req.body.name,
                email : req.body.email,
                age : req.body.age
            })
            const payload = {
                user : {
                    id : user.id
                }
            }
            const authToken = jwt.sign(payload,JWT_SECRET)
            // res.cookie('authToken', authToken, {
            //     secure: process.env.NODE_ENV === 'production',
            //     sameSite: 'Strict'
            // });
            res.json({success,authToken,user})
        }
        catch(error){
            res.status(400).json({error : error.message})
        }
    }
)

module.exports = router