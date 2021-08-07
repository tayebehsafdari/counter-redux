import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import {createStore} from 'redux';
import {createSlice, configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import counterReducer from "./reducers/counterReducer";

// let store = createStore(counterReducer);

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        incremented: state => {
            state.count += 1;
        },
        decremented: state => {
            state.count -= 1;
        }
    }
});

export const {incremented, decremented} = counterSlice.actions;
const store = configureStore({
    reducer: counterSlice.reducer
});

store.subscribe(() => console.log("subscribe getState: ", store.getState()));

store.dispatch(incremented());
store.dispatch(incremented());
store.dispatch(decremented());

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
