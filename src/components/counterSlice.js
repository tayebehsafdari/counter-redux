import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment: state => {
            state.count += 1;
        },
        decrement: state => {
            state.count -= 1;
        },
        reset: (state, action) => {
            state.count = action.payload
        },
        onChange: (state, action) => {
            state.count = action.payload
        }
    }
});

export const {increment, decrement, reset, onChange} = counterSlice.actions;
export const selectCount = state => state.count;
export default counterSlice.reducer;

