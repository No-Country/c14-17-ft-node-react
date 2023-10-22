const {Router} = require('express');
const { 
     postAccountHandler, 
    getAccountByUserIdHandler,
     putAccountHandler, 
     deleteAccountHandler
 } = require('../handlers/accountHandler');

const accountRouter= Router();

accountRouter.post('/:userId',  postAccountHandler)
accountRouter.get('/:userId',getAccountByUserIdHandler);
accountRouter.put('/:accountId', putAccountHandler);
accountRouter.delete('/:accountId', deleteAccountHandler);


module.exports = {accountRouter};