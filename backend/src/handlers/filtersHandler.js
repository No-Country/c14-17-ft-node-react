const { filterEarningsController, 
    filterEarningsbydateController,
    orderEarningsbydateController,
    orderEarningsbyamountController ,
    filterBillsController} = require("../controllers/filtersControllers");


//Earnings
const  filterEarningsHandler = async (req,res) => {
    const {catId,amount} = req.query
    try {
        const category = await filterEarningsController(catId,amount)
        res.status(200).send(category)
    } catch (error) {
        console.log(error);
        res.status(400).send({error:error.messages})

    }
}


const filterEarningsbydateHandler = async (req,res) => {
  
    try {
        const category = await filterEarningsbydateController(req,res)
        res.status(200).send(category)
    } catch (error) {
        console.log(error);
        res.status(400).send({error:error.messages})

    }
}


const orderEarningsbydateHandler = async (req,res) => {
    try {
        const category = await orderEarningsbydateController(req,res)
        res.status(200).send(category)
    } catch (error) {
        console.log(error);
        res.status(400).send({error:error.messages})

    }
}


const orderEarningsbyamountHandler = async (req,res) => {
    try {
        const category = await orderEarningsbyamountController(req,res)
        res.status(200).send(category)     
    }catch (error) {
        console.log(error);
        res.status(400).send({error:error.messages})

    }
}


//Bills
const  filterBillsHandler = async (req,res) => {
    const {UserId} = req.params
    const {catId,payment_method} = req.query
    try {
        const bills = await filterBillsController(catId,payment_method,UserId)
        res.status(200).send(bills)
    } catch (error) {
        console.log(error);
        res.status(400).send({error:error.messages})

    }
}

module.exports={
    filterEarningsHandler,
     filterEarningsbydateHandler,
     orderEarningsbydateHandler, 
     orderEarningsbyamountHandler,
     filterBillsHandler}

