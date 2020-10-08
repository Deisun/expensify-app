import React from "react";
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from "../components/Header";

// ...rest (or any variable name) will grab the rest of the props
export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
                <div>
                    <Header />
                    <Component {...props} />
                </div>
        ) : (
            <Redirect to="/" />
        )
    )}
    />
);

const mapStateToProps = (state) => ({
    // nice trick... flip to boolean values because could be undefined if logged out
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute);