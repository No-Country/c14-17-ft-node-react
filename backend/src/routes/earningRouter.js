const {Router} = require('express');
const { getEarnigsByUserIdHandler, postEarnigsByUserIdHandler, putEarnigsByUserIdHandler, deleteEarnigsByUserIdHandler } = require('../handlers/earningHandlers');
const { authMiddleware } = require('../middleware/authmiddleware');


const earningRouter = Router();

earningRouter.get('/:UserId', getEarnigsByUserIdHandler);
earningRouter.post('/:UserId', postEarnigsByUserIdHandler);
earningRouter.put('/:id',putEarnigsByUserIdHandler);
earningRouter.delete('/:id',deleteEarnigsByUserIdHandler);

module.exports ={earningRouter};