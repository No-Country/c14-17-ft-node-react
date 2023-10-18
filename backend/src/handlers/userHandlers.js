const {getUserByIdController,postUserController, loginController,forgotPasswordController,resetPasswordController} = require('../controllers/userControllers');
const { sendWelcomeEmail, sendPasswordResetEmail } = require('../helpers/nodemailer');

const getUserByIdHandler = async (req,res) =>{
    try {
        const user = await getUserByIdController()
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send({error:error.message})
    }
};

const postUserHandler = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        const newUser = await postUserController(name, password, email);
        sendWelcomeEmail(email); 
        res.status(200).send(newUser);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            res.status(400).send({ error: 'El correo electrónico ya está en uso.' });
        } else {
            res.status(500).send({ error: error.message });
        }
    }
};


const loginHandler = async (req,res)=>{
    try {
        const {email,password} = req.body
        const token = await loginController(email,password)
        res.status(200).send(token)
    } catch (error) {
        res.status(400).send({error:error.message})
    }
}
const forgotPasswordHandler = async (req,res)=>{
    try {
        const {email} = req.body
        console.log(email);
        const token = await forgotPasswordController(email)
        sendPasswordResetEmail(email,token)
        res.status(200).send('correo enviado exitosamente')
    } catch (error) {
        res.status(400).send({error:error.message})  
    }
}
const resetPasswordHandler = async (req,res)=>{
    try {
        const {newPassword,token} = req.body
        const response = await resetPasswordController(newPassword,token)
        res.status(200).send(response)
    } catch (error) {
        res.status(400).send({error:error.message})  
    }
}
module.exports = {getUserByIdHandler,postUserHandler,loginHandler,forgotPasswordHandler,resetPasswordHandler}