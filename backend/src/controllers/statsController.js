const {
  User,
  CategoryEarning,
  Earning,
  Bill,
  CategoryBill,
  Card,
  sequelize,
} = require("../db");
const { Op } = require("sequelize");

const sumEarningsByCategoryController = async (UserId, month) => {
  const user = await User.findByPk(UserId);
  if (!user) {
    return {
      error: "ID de usuario inválido",
    };
  }
  if (!month || month > 12 || month < 1) {
    return { error: "El mes enviado es incorrecto, deberia ser entre 1 y 12" };
  }
  const response = await Earning.findAll({
    where: {
      UserId,
      date: sequelize.literal(
        `YEAR(date) = YEAR(CURRENT_DATE) AND MONTH(date) = ${month}`
      ),
    },
    attributes: [
      [sequelize.col("CategoryEarning.name"), "category_name"],
      [sequelize.fn("SUM", sequelize.col("amount")), "ingresos_totales"],
    ],
    include: {
      model: CategoryEarning,
      attributes: [],
    },
    group: ["CategoryEarning.name"],
  });
  if (!response.length) {
    return `No se encontraron ingresos para el mes indicado: ${month} `;
  }
  return response;
};

const sumBillsByCategoryController = async (UserId, month) => {
  const user = await User.findByPk(UserId);
  if (!user) {
    return {
      error: "ID de usuario inválido",
    };
  }
  if (!month || month > 12 || month < 1) {
    return { error: "El mes enviado es incorrecto, deberia ser entre 1 y 12" };
  }
  const response = await Bill.findAll({
    where: {
      UserId,
      date: sequelize.literal(
        `YEAR(date) = YEAR(CURRENT_DATE) AND MONTH(date) = ${month}`
      ),
    },
    attributes: [
      [sequelize.col("CategoryBill.name"), "category_name"],
      [sequelize.fn("SUM", sequelize.col("amount")), "ingresos_totales"],
    ],
    include: {
      model: CategoryBill,
      attributes: [],
    },
    group: ["CategoryBill.name"],
  });
  if (!response.length) {
    return `No se encontraron ingresos para el mes indicado: ${month} `;
  }
  return response;
};

const sumBillsMonthControlle = async (UserId, month) => {
  const user = await User.findByPk(UserId);
  if (!user) {
    return {
      error: "El usuario no exite",
    };
  }
  if (!month || month > 12 || month < 1) {
    return { error: "El mes enviado es incorrecto, deberia ser entre 1 y 12" };
  }
  const response = await Bill.findAll({
    where: {
      UserId,
      date: sequelize.literal(
        `YEAR(date) = YEAR(CURRENT_DATE) AND MONTH(date) = ${month}`
      ),
    },
    attributes: [
      [sequelize.fn("MONTH", sequelize.col("date")), "month"],
      [sequelize.fn("SUM", sequelize.col("amount")), "total_monto"],
    ],
    group: ["month"],
    raw: true,
  });
  if (response.length == 0) {
    return `El Mes no tiene Gatos Asociados `;
  }
  return response;
};

const obtenerDatosParaGrafico = async (userId) => {
  try {
    const today = new Date();
    const lastFifteenDays = [];
    for (let i = 14; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      lastFifteenDays.push(date.toISOString().slice(0, 10));
    }
    const response = await Bill.findAll({
      where: {
        UserId: userId,
        date: {
          [Op.between]: [lastFifteenDays[0], lastFifteenDays[14]],
        },
      },
      attributes: [
        [sequelize.col("date"), "fecha"],
        [sequelize.fn("SUM", sequelize.col("amount")), "total_gasto"],
        [sequelize.col("Card.name"), "nombre_tarjeta"],
        "payment_method",
      ],
      include: [
        {
          model: Card,
          attributes: [],
        },
      ],
      group: ["fecha", "nombre_tarjeta", "payment_method"], // Agrupa por fecha, nombre de la tarjeta y método de pago
      order: ["fecha"],
    });

    const paymentMethods = Array.from(
      new Set(
        response.map((record) =>
          record.payment_method
            ? record.dataValues.nombre_tarjeta ?? "Efectivo"
            : "Efectivo"
        )
      )
    );

    const seriesData = paymentMethods.map((paymentMethod) => {
      const data = lastFifteenDays.map((date) => {
        const record = response.find(
          (r) =>
            r.dataValues.fecha === date &&
            (r.payment_method ? r.dataValues.nombre_tarjeta : "Efectivo") ===
              paymentMethod
        );
        return record ? parseInt(record.dataValues.total_gasto) : 0;
      });

      return {
        name: paymentMethod,
        type: "line",
        data,
      };
    });

    return {
      data: lastFifteenDays,
      series: seriesData,
    };
  } catch (error) {
    console.error("Error en la consulta:", error);
    throw error;
  }
};

const earningVsBillController = async (UserId, month) => {
  const user = await User.findByPk(UserId);

  if (!user) {
    return {
      error: "El usuario no exite",
    };
  }

  if (!month || month > 12 || month < 1) {
    return { error: "El mes enviado es incorrecto, deberia ser entre 1 y 12" };
  }

  //Suma todos los ingresos por mes de un usuario

  const sumEarnings = await Earning.findAll({
    where: {
      UserId,
      date: sequelize.literal(
        `YEAR(date) = YEAR(CURRENT_DATE) AND MONTH(date) = ${month}`
      ),
    },
    attributes: [[sequelize.fn("SUM", sequelize.col("amount")), "sumEarnings"]],
    raw: true,
  });
  const sumearnings = parseInt(sumEarnings[0].sumEarnings);

  //Suma todos los Gatos por mes de un usuario
  const sumBill = await Bill.findAll({
    where: {
      UserId,
      date: sequelize.literal(
        `YEAR(date) = YEAR(CURRENT_DATE) AND MONTH(date) = ${month}`
      ),
    },
    attributes: [[sequelize.fn("SUM", sequelize.col("amount")), "sumBill"]],
    raw: true,
  });
  const sumbill = parseInt(sumBill[0].sumBill);

  if (isNaN(sumbill) && isNaN(sumearnings)) {
    return {
      sumearnings: 0,
      sumbill: 0,
    };
  }

  const response = {
    sumearnings: isNaN(sumearnings) ? 0 : sumearnings,
    sumbill: isNaN(sumbill) ? 0 : sumbill,
  };
  return response;
};

module.exports = {
  sumEarningsByCategoryController,
  sumBillsByCategoryController,
  sumBillsMonthControlle,
  obtenerDatosParaGrafico,
  earningVsBillController,
};
