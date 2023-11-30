
const UserAuth = require('./../model/userModel');


const signUp = async (req,res) => {
    try{
        const user = await UserAuth.create(req.body)
        res.status(201).json({
            status: 'success',
            data: {
                user
            }
        })
    }catch(error){
        res.status(404).json(error)
        console.log(error)
    }
}
module.exports = {
    signUp
}