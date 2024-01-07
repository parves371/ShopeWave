import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: JSON.parse(localStorage.getItem("carData"))
    ? JSON.parse(localStorage.getItem("carData"))
    : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let findIndex = state.cartData.findIndex(
        (items) => items.id === action.payload.id
      );

      if (findIndex !== -1) {
        state.cartData[findIndex].qun += 1;
        localStorage.setItem("carData", JSON.stringify(state.cartData));
      } else {
        state.cartData = [...state.cartData, action.payload];
        localStorage.setItem("carData", JSON.stringify(state.cartData));
      }
    },
    removeToCart: (state, action) => {
      state.cartData.splice(action.payload, 1);
      // localStorage.setItem("carData", JSON.stringify(state.cartData));
    },
    updateQun: (state, action) => {
    //   console.log(action.payload);
      if (action.payload.type === "plus") {
        state.cartData[action.payload.index].qun += 1;
        localStorage.setItem("carData", JSON.stringify(state.cartData));
      } else {
        state.cartData[action.payload.index].qun -= 1;
        localStorage.setItem("carData", JSON.stringify(state.cartData));
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeToCart, updateQun } = cartSlice.actions;

export default cartSlice.reducer;
