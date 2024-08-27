import { createSlice } from '@reduxjs/toolkit';

export const canvasSlice = createSlice({
    name:'canvas',
    initialState:{
        value: 0,
    },
    reducers:{
        increase: (state) => {
            state.value +=1;
        },
        decrease: (state) => {
            state.value -=1;
        }
    }
})

// Action creators for type of action 
export const { increase, decrease } = canvasSlice.actions

export default canvasSlice.reducer