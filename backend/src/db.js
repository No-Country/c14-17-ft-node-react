const {Sequelize} = require('sequelize')
require('dotenv').config()
const UserFunction = require('./models/user')
const EarningFunction = require("./models/earning");
const AccountFunction = require("./models/account");
const CategoryFuntion = require('./models/category');
const BillFunction = require('./models/bill')

const sequelize = new Sequelize(
    process.env.DB_URI,
    {logging:false}
)

//MODELS FUNCTIONS
UserFunction(sequelize);
EarningFunction(sequelize);
AccountFunction(sequelize);
CategoryFuntion(sequelize);
BillFunction(sequelize)

const {User,Bill,Earning,Category,Account} = sequelize.models

//Usuario - categorias
User.hasMany(Earning)
Earning.belongsTo(User)

//Usuario - cuenta
User.hasMany(Account)
Account.belongsTo(User)

//Usurio - categoria
User.hasMany(Category)

//Cuenta- ingreso
Category.hasMany(Earning)

//categoria - gastos
Category.hasOne(Bill)
User.hasOne(Bill)


module.exports = {
    sequelize,
    ...sequelize.models
}


