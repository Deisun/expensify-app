import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { createBrowserHistory } from "history";
import CreateExpensePage from "../components/CreateExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import NotFoundPage from "../components/NotFoundPage";
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import LoginPage from "../components/LoginPage";

export const history = createBrowserHistory();

const AppRouter= () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={CreateExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
