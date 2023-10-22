const {Router} = require('express');
const {getCategoryHandler,
      postCategoryHandler,
       postMultiCatHandler
} = require('../handlers/categoryHandlers');

const categoryRouter = Router();

categoryRouter.get('/', getCategoryHandler);
categoryRouter.post('/',postCategoryHandler);
categoryRouter.post('/multi',postMultiCatHandler);

module.exports ={categoryRouter};