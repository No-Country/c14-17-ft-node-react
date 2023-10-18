const {Sequelize} = require('sequelize')
require('dotenv').config()
const UserFunction = require('./models/user')
const CategoryBillFunction = require('./models/categoryBill')
const CategoryEarningFunction = require('./models/categoryEarning')
const BillFunction = require('./models/bill')
const SavingFunction =require('./models/saving')
const CardFunction = require("./models/card")
const EarningFunction = require("./models/earning");


const sequelize = new Sequelize(
    process.env.DB_URI,
    {logging:false}
)

//MODELS FUNCTIONS
UserFunction(sequelize);
CategoryEarningFunction(sequelize);
CategoryBillFunction(sequelize);
BillFunction(sequelize)
SavingFunction(sequelize)
CardFunction(sequelize);
EarningFunction(sequelize);

const {User,Bill,Earning,CategoryBill,CategoryEarning,Card} = sequelize.models

// ASSOCIATIONS
User.hasMany(Bill);
Bill.belongsTo(User);

User.hasMany(Card);
Card.belongsTo(User);

Card.hasMany(Bill);
Bill.belongsTo(Card);

CategoryEarning.hasMany(Earning);
Earning.belongsTo(CategoryEarning);

CategoryBill.hasMany(Bill);
Bill.belongsTo(CategoryBill);

User.hasMany(Earning);
Earning.belongsTo(User);


module.exports = {
    sequelize,
    ...sequelize.models
}


