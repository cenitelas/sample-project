import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import globalReducer from './Redusers/globalReducer'
import * as serviceWorker from './serviceWorker';
import Main from "./Containers/MainContainer";

const store = createStore(globalReducer(),applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
