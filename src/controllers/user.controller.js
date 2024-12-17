import {asyncHandler }from "../utils/asyncHandler.js"

const registerUser= asyncHandler(async (req,res)=>{
    const {fullName, email, username, password } = req.body
    console.log("emil==",email)

})

export {
    registerUser, 
}