const {Router} = require('express');
const {userRouter} = require('./userRouter');
const {earningRouter} = require('./earningRouter');
const { categoryRouter } = require('./categoryRouter');
const { accountRouter } = require('./accountRouter');

const billsRouters = require('./billsRouter');
const { filtersRouter } = require('./filtersRouter');

const router = Router();

// PRINCIPAL ROUTES 
router.use('/user', userRouter);
router.use('/earning', earningRouter);
router.use('/category', categoryRouter);
router.use('/account', accountRouter)


router.use('/bill', billsRouters);
router.use('/filter',filtersRouter)



module.exports = router