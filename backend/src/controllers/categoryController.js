const {Categories } = require("../helpers/categories.js");
const {Category} = require("../db.js");

const getCategoryController = async () => {

    try {
        const category = await Category.findAll();
    
        if (category.length == 0) {
            return "No tiene registro"
            }
        return category
    } catch (error) {
        console.log(error);
    } 
}


const postCategoryController = async (name, date, UserId) => {
    const category = await Category.create({name, date, UserId})
    return category
}


const postMultiCatController = async () => {
    try {
        const categories = await Category.bulkCreate(Categories)
        return categories
    } catch (error) {
        console.log(error.message);
    }
    
}


module.exports = {getCategoryController,
postCategoryController,
postMultiCatController
}

