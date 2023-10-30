import { createSlice } from "@reduxjs/toolkit";
import { axiosMiFinanz } from "@/utils/configAxios";

const initialState = {
  earning: [],
  category: [],
  error: false,
};

const earningSlice = createSlice({
  name: "earning",
  initialState,
  reducers: {
    setEarningGlobal: (state, action) => {
      return { ...state, earning: action.payload };
    },
    setCategoryGlobal: (state, action) => {
      return { ...state, category: action.payload };
    },
    setChangeErrorStatus: (state) => {
      return { ...state, error: !state.error };
    },
  },
});

export const { setEarningGlobal, setCategoryGlobal, setChangeErrorStatus } =
  earningSlice.actions;

//obtener todos los bill, con el método get del usuario logueado, para ello recibe el id
export const getAllEarning = (id) => (dispatch) => {
  axiosMiFinanz
    .get(`/earning/${id}`)
    .then((res) => dispatch(setEarningGlobal(res.data.results)))
    .catch((err) => console.log(err));
};

// agregar un nuevo bill con el método post, recibe el id y la data
export const addEarning = (id, data) => (dispatch) => {
  // console.log(id, data);
  axiosMiFinanz
    .post(`/earning/${id}`, data)
    .then((res) => dispatch(getAllEarning())) // después de crear el earning mandamos actualizamos los earning del usuario

    .catch((err) => console.log(err));
};

//extraer las categorías de earning
export const getAllCategoryEarning = () => (dispatch) => {
  axiosMiFinanz
    .get("/categoryEarning")
    .then((res) => dispatch(setCategoryGlobal(res.data)))
    .catch((err) => console.log(err));
};

export default earningSlice.reducer;
