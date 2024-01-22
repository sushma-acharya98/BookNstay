 'use client'
const User =('../models/user.js')
const registerNewUser = async (req,res)=>{
     await User.create(req.body)
    res.json({
        msg: "registered successfully"
    })
}

module.exports= {registerNewUser}