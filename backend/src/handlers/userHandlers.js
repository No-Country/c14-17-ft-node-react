const {getUserByIdController} = require('../controllers/userControllers')

const getUserByIdHandler = async (req,res) =>{
    try {
        const user = getUserByIdController()
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send({error:error.message})
    }
};


module.exports = {getUserByIdHandler}