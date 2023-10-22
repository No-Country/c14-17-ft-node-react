const { postAccountController, 
       getAccountByUserIdController, 
       putAccountController, 
       deleteAccountController 
    } = require("../controllers/accountControllers")

const postAccountHandler = async (req, res) => {
    try {
        const userId = req.params.userId;
        const { name, bank_name, type, date, EarningId, BillId} = req.body;
        const account = await postAccountController( name, bank_name, type, date, userId, EarningId, BillId);
        res.status(200).json({message: 'Cuenta registrada con éxito', account});
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor', message: error.message });
    }
};

const getAccountByUserIdHandler = async (req,res) => {
    try {
        const userId = req.params.userId;
        const cards =  await getAccountByUserIdController(userId)
        res.status(200).send(cards)
    } catch (error) {
        res.status(400).send({error:error.messages})
    }
};

const putAccountHandler = async (req, res) => {
    try {
        const accountId = req.params.accountId;
        const { name, bank_name, type, date, UserId, EarningId, BillId } = req.body;
        const card = await putAccountController(name, bank_name, type, date, UserId, EarningId, BillId, accountId );
        res.status(200).send(card);
    } catch (error) {
        res.status(400).json({error:error.messages})
    }
};

const deleteAccountHandler = async (req, res) => {
    try {
        const accountId = req.params.accountId;
        const card = await deleteAccountController(accountId);
        res.status(200).send(" Cuenta eliminada con éxito")
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' })
    }
};

module.exports = {
    postAccountHandler, 
    getAccountByUserIdHandler, 
    putAccountHandler, 
    deleteAccountHandler
};