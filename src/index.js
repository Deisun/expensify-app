import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './styles/styles.scss'
import AppRouter from "./routers/AppRouter";
import ReduxExpensify from "./playground/redux-expensify";

ReactDOM.render(<ReduxExpensify />, document.getElementById('root'));

