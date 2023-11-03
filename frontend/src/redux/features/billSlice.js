import { createSlice } from "@reduxjs/toolkit";
import { axiosMiFinanz } from "@/utils/configAxios";

const initialState = {
  bill: [],
  category: [],
  error: false,
};

const billSlice = createSlice({
  name: "bill",
  initialState,
  reducers: {
    setBillGlobal: (state, action) => {
      return { ...state, bill: action.payload };
    },
    setCategoryGlobal: (state, action) => {
      return { ...state, category: action.payload };
    },

    setChangeErrorStatus: (state) => {
      return { ...state, error: !state.error };
    },
  },
});

export const { setBillGlobal, setCategoryGlobal, setChangeErrorStatus } =
  billSlice.actions;

//obtener todos los bill, con el método get del usuario logueado, para ello recibe el id
export const getAllBill = (userId) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axiosMiFinanz
      .get(`/bill/user/${userId}/bills`)
      .then((res) => {
        if (res.status === 200) {
          const allBillData = res.data.Bills.map((bill) => {
            return {
              id: bill.id,
              name: bill.name,
              amount: bill.amount,
              date: bill.date,
              payment_method: bill.payment_method,
              userId: bill.UserId,
              categoryId: bill.CategoryBillId,
              category: bill.CategoryBill,
              frequency: bill.frequency,
              cardId: bill.CardId,
            };
          });
          dispatch(setBillGlobal(allBillData));
          resolve(allBillData);
        } else reject(new Error("Error en la solicitud"));
      })
      .catch((err) => {
        reject(new Error(err));
      });
  });
};

// agregar un nuevo bill con el método post, recibe el id y la data
export const addBill = (id, data) => (dispatch) => {
  axiosMiFinanz
    .post(`/bill/user/${id}`, data)
    .then((res) => dispatch(getAllBill(id))) // después de crear el bill mandamos actualizamos los bill del usuario

    .catch((err) => console.error(err));
};

export const deleteBill = (id, userId) => (dispatch) => {
  axiosMiFinanz
    .delete(`/bill/${id}`)
    .then((res) => {
      if (res.status === 204) {
        // Eliminación exitosa, obtener de nuevo la lista de gastos
        dispatch(getAllBill(userId));
      } else {
        console.error(
          "Error al eliminar el gasto. Código de estado:",
          res.status
        );
      }
    })
    .catch((err) => console.error("Error al eliminar el gasto:", err));
};

export const updateBill = (id, data, userId) => (dispatch) => {
  axiosMiFinanz
    .put(`/bill/${id}`, data)
    .then((res) => {
      if (res.status === 200) {
        // actualización exitosa, obtener de nuevo la lista de gastos
        dispatch(getAllBill(userId));
      } else {
        console.error(
          "Error al actualizar el gasto. Código de estado:",
          res.status
        );
      }
    })
    .catch((err) => console.error("Error al actualizar el gasto:", err));
};

//extraer las categorías de Bill
export const getAllCategoryBill = () => (dispatch) => {
  axiosMiFinanz
    .get("/categoryBill")
    .then((res) => dispatch(setCategoryGlobal(res.data)))
    .catch((err) => console.error(err));
};

export default billSlice.reducer;
