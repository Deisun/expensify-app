import React from 'react';
import {BrowserRouter, Link, NavLink, Route, Switch} from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";

const AddExpensePage = () => (
    <div>
        This is from my AddExpense component
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from my EditExpense component
    </div>
);

const HelpPage = () => (
    <div>
        This is from my HelpPage component
    </div>
);

const NotFoundPage = () => (
    <div>
        404! <Link to="/">Go home</Link>
    </div>
);

const Header = () => (
    <div>
        <header>
            <h1>Expensify</h1>
            <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
            <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
            <NavLink to="help" activeClassName="is-active">Help</NavLink>
        </header>
    </div>
);

const AppRouter= () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
