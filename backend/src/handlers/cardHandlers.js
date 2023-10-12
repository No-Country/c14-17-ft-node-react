const { getCardsByUserIdController } = require("../controllers/cardControllers/getCardsByUserIdController")

const getCardsByUserIdHandler = async (req,res) => {
    try {
        const cards = getCardsByUserIdController()
        res.status(200).send(cards)
    } catch (error) {
        res.status(400).send({error:error.messages})
    }
}

module.exports = {getCardsByUserIdHandler}