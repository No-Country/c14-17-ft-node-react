const {User} = require('../db');
const { encrypt, compare } = require('../helpers/bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const secretKey = process.env.SECRET_KEY 

const getUserByIdController = async () => {
    const users = await User.findAll()
    return users
}

const postUserController = async (name,password,email) =>{
    const hashPassword = await encrypt(password)

    const newUser = User.create({
        name,
        email,
        password: hashPassword
    })

    return newUser
}

const loginController = async (email,password) => {
    const user = await User.findOne({
        where:{
            email
        }
    })

    if (!user) {
        return "Usuario invalido"
    }

    const checkPassword = await compare(password,user.password);

    if (checkPassword) {
        const token = jwt.sign({ userId: user.id, email: user.email }, secretKey, {
            expiresIn: '1h' 
        });
        return {
            token: token,
            user: user
        };
    }

    if (!checkPassword) {
        return {
            error:"Contraseña incorrecta"
        }
    }
}

const forgotPasswordController = async (email)=>{
    const user = await User.findOne({
         where: {
            email 
        } 
    });

    if (!user) {
        return { 
            error: 'No se encontró un usuario con este correo electrónico.'
        };
    }

    const token = jwt.sign({ userId: user.id, email }, secretKey, { expiresIn: '1h' });
    return token
}

const resetPasswordController = async (newPassword,token) => {
    const decodedToken = jwt.verify(token, secretKey);
    const user = await User.findOne({
        where: { 
            id: decodedToken.userId 
        } 
    });

    if (!user) {
        return { error: 'Usuario no encontrado.' }
    }
    
    const hashPassword = await encrypt(newPassword);
    user.password = hashPassword;
    await user.save();
    return { message: 'Contraseña restablecida con éxito.' }

}
module.exports ={getUserByIdController,postUserController,loginController,forgotPasswordController,resetPasswordController}