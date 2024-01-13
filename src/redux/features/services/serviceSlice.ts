import { createSlice } from "@reduxjs/toolkit";

interface Services {
  value: [];
}

const initialState: Services = {
  value: [],
};

export const serviceSlice = createSlice({
  name: "service",

  initialState,
  reducers: {
    addToCart: (state, action: any) => {
      // const services =
      state.value.push(action.payload);
    },
  },
});

export const { addToCart } = serviceSlice.actions;

export default serviceSlice.reducer;
