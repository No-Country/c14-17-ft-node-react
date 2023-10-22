const { Card, User,Account } = require('../db');

const postAccountController = async (name, bank_name, type, date, userId, EarningId, BillId) => {
    try {
        const user = await User.findByPk(userId);
        if (!user) {
          throw new Error('Usuario no encontrado.');
        }
        const card = await Account.create({
            name, bank_name, type, date, userId, EarningId, BillId
        })
        await card.setUser(user);
        return card;
    } catch (error) {
        throw error;
    }
};

const getAccountByUserIdController = async (userId) => {
    try {
        const cards = await Account.findAll({
            where: { userId: userId }
        })
        return cards;
    } catch (error) {
        throw error;
    }
}

const putAccountController = async (name, bank_name, type, date, UserId, EarningId, BillId, accountId) => {
    console.log(name, bank_name, type, date, UserId, EarningId, BillId, accountId);
    try {
        const updateCArd = await Account.findByPk(accountId);
        if(!updateCArd){
            throw new Error('La Cuenta no se encontró.')   
        }
        if(name){
            updateCArd.name = name;
        }
        if(bank_name){
            updateCArd.bank_name = bank_name;
        }  
        if(type){
            updateCArd.type = type;
        }
        if(date){
            updateCArd.date = date;
        }
        if(UserId){
            updateCArd.UserId = UserId;
        }      
        if (EarningId) {
            updateCArd.EarningId=EarningId
        }
        if (BillId) {
            updateCArd.BillId=BillId
        }
        if (accountId) {
            updateCArd.accountId=accountId
        }
        await updateCArd.save()
        return updateCArd;
    } catch (error) {
        throw error;
    }
};

const deleteAccountController = async (accountId) => {
    try {
    const card = await Account.findByPk(accountId);
    if (!card) {
        throw new Error('La Cuenta no se encontró.') ;
      }
      await card.destroy();
    } catch (error) {
        throw error;
    }
};


module.exports = {
    postAccountController, 
    getAccountByUserIdController, 
    putAccountController, 
    deleteAccountController 
};