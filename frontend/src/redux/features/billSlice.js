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
export const getAllBill = (id) => (dispatch) => {
  axiosMiFinanz
    .get(`/bill/user/${id}/bills`)
    .then((res) => dispatch(setBillGlobal(res.data)))
    .catch((err) => console.log(err));
};

// agregar un nuevo bill con el método post, recibe el id y la data
export const addBill = (id, data) => (dispatch) => {
  // console.log(id, data);
  axiosMiFinanz
    .post(`/bill/user/${id}`, data)
    .then((res) => dispatch(getAllBill(id))) // después de crear el bill mandamos actualizamos los bill del usuario

    .catch((err) => console.log(err));
};

export const deleteBill = (id, userId) => (dispatch) => {
  axiosMiFinanz
    .delete(`/bill/${id}`)
    .then((res) => {
      if (res.status === 204) {
        // Eliminación exitosa, obtener de nuevo la lista de gastos
        dispatch(getAllBill(userId));
        // console.log("id envaido a getAllBill", userId);
        // console.log(`Gasto eliminado: ${id}`);
      } else {
        console.log(
          "Error al eliminar el gasto. Código de estado:",
          res.status
        );
      }
    })
    .catch((err) => console.log("Error al eliminar el gasto:", err));
};

export const updateBill = (id, data, userId) => (dispatch) => {
  axiosMiFinanz
    .put(`/bill/${id}`, data)
    .then((res) => {
      if (res.status === 200) {
        // actualización exitosa, obtener de nuevo la lista de gastos
        dispatch(getAllBill(userId));
        // console.log("id enviado a getAllBill", userId);
        // console.log(`gasto actualizado: ${id}`);
        // console.log("data enviada", data);
        // console.log("estado que devuelve el back", res.status);
      } else {
        console.log(
          "Error al actualizar el gasto. Código de estado:",
          res.status
        );
      }
    })
    .catch((err) => console.log("Error al actualizar el gasto:", err));
};

//extraer las categorías de Bill
export const getAllCategoryBill = () => (dispatch) => {
  axiosMiFinanz
    .get("/categoryBill")
    .then((res) => dispatch(setCategoryGlobal(res.data)))
    .catch((err) => console.log(err));
};

export default billSlice.reducer;
