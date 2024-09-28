const express = require("express");
const User = require("../../models/UserCredentials.model.js");
const jwt = require("jsonwebtoken");
const router = express.Router();
const JWT_SECRET = "escapethematrix"


// Login Route Api

router.post("/loginuser",
    async (req,res)=>{
        return res.json({"ta":"ra"});
    }
)

module.exports = router;