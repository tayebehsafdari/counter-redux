import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import App from './components/App';
import store from './components/store';

console.log("store: ", store);
// console.log("store dispatch: ", store.dispatch());
// console.log("store getState: ", store.getState());
// console.log("store liftedStore: ", store.liftedStore);
// store.replaceReducer(() => console.log("store replaceReducer: "));
// store.subscribe(() => console.log("store subscribe: ", store.getState()));
// store.Symbol(() => console.log("store Symbol: "));
// import {createStore} from 'redux';
// import counterReducer from './reducers/counterReducer';
// let store = createStore(counterReducer);

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
