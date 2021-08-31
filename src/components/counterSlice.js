import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchCount} from "./counterAPI";

/* export const incrementAsync = amount => (dispatch, getState) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount));
    }, 1000);
}; */

const initialState = {
    count: 0,
    status: 'idle'
};

export const incrementAsync = createAsyncThunk('counter/fetchCount', async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
});

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => state.count += 1,
        decrement: state => state.count -= 1,
        reset: (state, action) => state.count = action.payload,
        onChange: (state, action) => state.count = action.payload,
        incrementByAmount: (state, action) => state.count += action.payload
    },
    extraReducers: builder => {
        builder
            .addCase(incrementAsync.pending, state => state.status = 'loading')
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.count = action.payload;
            });
    }
});

export const {increment, decrement, reset, onChange, incrementByAmount} = counterSlice.actions;
export const selectCount = state => state.counter.count;
export default counterSlice.reducer;

// console.log("counterSlice: ", counterSlice.actions);
// console.log("counterSlice: ", counterSlice.actions.increment());
// console.log("counterSlice: ", counterSlice.reducer({count: 10}, counterSlice.actions.increment()));

