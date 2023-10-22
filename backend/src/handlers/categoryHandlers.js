
const { getCategoryController,  
  postCategoryController,
  postMultiCatController 
} = require("../controllers/categoryController")


const getCategoryHandler = async (req,res) => {
    try {
            const categoryEarnigns = await getCategoryController(req)
            res.status(200).send(categoryEarnigns)
        } catch (error) {
            res.status(400).send({error:error.messages})
        }
    }

const postCategoryHandler = async (req,res) => {
    try {
        const {name, date, UserId }= req.body;
        const category = await postCategoryController(name, date, UserId)
        res.status(200).send(category)
    } catch (error) {
        console.log(error);
        res.status(400).send({error:error.messages})
    }
}

const postMultiCatHandler = async (req,res)=>{
    try {
        const response = await postMultiCatController()
        res.status(200).send(response)
    } catch (error) {
        res.status(400).send({error:error.messages})
    }
}

module.exports = {getCategoryHandler,
              postCategoryHandler,
              postMultiCatHandler
            }

