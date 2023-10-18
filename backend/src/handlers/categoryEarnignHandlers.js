const { getCategoryEarnignsByUserController,  postCategoryEarnignsByUserController } = require("../controllers/categoryEarningController")


const postCategoryEarnignsByUserIdHandler = async (req,res) => {
    try {
        const {name}= req.body;
        const categoryEarnigns = await postCategoryEarnignsByUserController(name)
        res.status(200).send(categoryEarnigns)
    } catch (error) {
        res.status(400).send({error:error.messages})
    }
}
const getCategoryEarnignsByUserIdHandler = async (req,res) => {
    try {
        const {id}= req.params
        const categoryEarnigns = await getCategoryEarnignsByUserController(id)
        res.status(200).send(categoryEarnigns)
    } catch (error) {
        res.status(400).send({error:error.messages})
    }
}

module.exports = {getCategoryEarnignsByUserIdHandler,postCategoryEarnignsByUserIdHandler}