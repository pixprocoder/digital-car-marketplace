import { createSlice } from "@reduxjs/toolkit";

interface Services {
  value: [];
  isSuccessful?: boolean;
}

const initialState: Services = {
  value: [],
  isSuccessful: false,
};

export const serviceSlice = createSlice({
  name: "service",

  initialState,
  reducers: {
    addToCart: (state, action: any) => {
      const itemToAdd = action.payload;

      if (!state.value.some((item) => item.serviceId === itemToAdd.serviceId)) {
        state.value = [...state.value, itemToAdd];
        state.isSuccessful = true;
      } else {
        // state.isSuccessful = false;
        state.isSuccessful = false;
      }
    },
  },
});

export const { addToCart } = serviceSlice.actions;

export default serviceSlice.reducer;
