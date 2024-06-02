import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: () => { },
    removeFromCart: () => { },
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer