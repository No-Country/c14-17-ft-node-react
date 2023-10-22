const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Bill",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        description : {
          type: DataTypes.STRING,
          allowNull: true,
        },
        amount:{
          type: DataTypes.INTEGER,
          allowNull: true,
        },
       frequency:{
        type: DataTypes.STRING,
        allowNull: false,
       },
       payment_method:{
        type: DataTypes.BOOLEAN,
        allowNull:true,
       },
       date:{
        type: DataTypes.DATEONLY,
        allowNull:true,
       },
    },
    { timestamps: false }
  );
};
