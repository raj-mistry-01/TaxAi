import {asyncHandler} from '../utils/asyncHandler.js';

const registerUSer = asyncHandler(async(req,res)=>{
    res.status(500).json ({
        message: "OK"
    })
})

export {registerUSer,}

