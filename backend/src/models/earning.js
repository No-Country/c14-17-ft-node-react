const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
      "Earning",
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
          account_type: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          amount: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          charged :{
          type: DataTypes.BOOLEAN,
          allowNull: true,
          },
          date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
          },

      },
      { timestamps: false }
    );
  };