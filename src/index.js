import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from "./routers/AppRouter";
import { Provider } from 'react-redux';
import configureStore from "./store/configureStore";
import { startSetExpenses } from './actions/expenses'
import {firebase} from './firebase/firebase'

import 'normalize.css';
import './styles/styles.scss'
import "react-datepicker/dist/react-datepicker.css";

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('root'));
        hasRendered = true
    }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
   if (user) {
       console.log("log in")
       store.dispatch(startSetExpenses()).then(() => {
           renderApp()
           if (history.location.pathname === '/') {
               history.push('/dashboard')
           }
       });
   } else {
       renderApp()
       history.push('/')
   }
});