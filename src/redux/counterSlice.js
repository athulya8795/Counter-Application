import { createSlice } from "@reduxjs/toolkit";
// createSlice() - returns automatically reducer as well as action
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    // actions
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        reset: (state) => {
            state.value = 0
        },
        changeRange: (state, action) => {
            state.value += action.payload   // if when you argument is been passed to an action that argument can only we accessed from action Payload 
        }
    }
})

// action are need to component
export const { increment, decrement, reset, changeRange } = counterSlice.actions

// reducer are need to store to update state
export default counterSlice.reducer