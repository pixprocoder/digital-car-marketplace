import { createSlice } from "@reduxjs/toolkit";

interface IUsers {
  email?: any;
  admin?: any;
  user?: any;
  super_admin?: any;
}

const initialState: IUsers = {
  email: null,
  admin: null,
  user: null,
  super_admin: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: any) => {
      state.email = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
