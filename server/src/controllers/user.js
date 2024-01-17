const User =('../models/user.js')
const registerNewUser = (req,res)=>{
    User.create(req.body)
    res.json({
        msg: "registered successfully"
    })
}

module.exports= {registerNewUser}