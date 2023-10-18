const {CategoryEarning} = require("./../db.js");

const postCategoryEarnignsByUserController = async (name) => {
    const categoryEarnigns = await CategoryEarning.create({name})
    return categoryEarnigns
}

//Arreglar
const getCategoryEarnignsByUserController = async (id) => {
    console.log(id);
    const categoryEarnigns = await CategoryEarning.findByPk(id);
    if (!categoryEarnigns) {
        return "La categoria no existe"
       } 
    return categoryEarnigns
}


module.exports = {getCategoryEarnignsByUserController,
postCategoryEarnignsByUserController}