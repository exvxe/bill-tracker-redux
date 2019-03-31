import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import {loadState, saveState} from './reducers/localStorage';
import throttle from 'lodash.throttle';

const persistedState = loadState();
const store = createStore(rootReducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(throttle(() => {
    saveState({
        bills: store.getState().bills,
        categories: store.getState().categories,
        lastID: store.getState().lastID,
        catLastID: store.getState().catLastID,
        headers: store.getState().headers
    });
}, 1000));

ReactDOM.render(
    <Provider store={store}><App /></Provider>, document.getElementById("root")
);
registerServiceWorker();