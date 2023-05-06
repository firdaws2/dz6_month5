import {createSlice} from "@reduxjs/toolkit";
import data from './data.json'

const initialState = {
    prod: data
}

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {}
})

export default productsSlice.reducer;
export const prodSelect = state => state.productsSlice;