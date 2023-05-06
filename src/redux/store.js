import {configureStore} from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import busSlice from "./busSlice";

export const store = configureStore({
    reducer: {
        productsSlice,
        busSlice
    }
})