import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-Slice";
import cartSlice from "./card-Slice";

const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        cart: cartSlice.reducer
    }
})

export default store