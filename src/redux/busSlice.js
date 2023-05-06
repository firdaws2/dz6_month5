import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    bus: []
}

const busSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {
        setBus: (state, action) => {
            state.bus.push(action.payload)
        }
    }
})

export default busSlice.reducer;
export const {setBus} = busSlice.actions;
export const busSelect = state => state.busSlice;