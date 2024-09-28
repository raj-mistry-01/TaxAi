const express = require("express")
const router = express.Router()
const desp = require("../models/Desp")

// /api/auth
router.post(
    "/fetchdesp",
    async (req,res) => {
        try {
            res.json({msg : " hi"})
        } catch (error) {
            res.json({error})
        }
    }
)

module.exports  = router