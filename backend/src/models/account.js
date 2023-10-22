const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Account",
      {
          id: {
              type: DataTypes.UUID,
              defaultValue: DataTypes.UUIDV4,
              primaryKey: true,
          },
          bank_name: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          type: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          date:{
            type: DataTypes.DATEONLY,
            allowNull:true,
           },
      },
      { timestamps: false }
    );
  };
  