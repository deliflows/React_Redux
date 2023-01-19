import { createSlice } from "@reduxjs/toolkit";
//Default State
const initialState = {
    balance: 0
};

export const counterSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        increment: (state, action) =>{
            state.balance += action.payload
        },
        decrement: (state, action) =>{
            state.balance -= action.payload
        },
    }
})
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer;