import React from "react";
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// ...rest (or any variable name) will grab the rest of the props
export const PublicRoute = ({ isAuthenticated, component: Component, ...rest}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <Redirect to="/dashboard" />
        ) : (
            <Component {...props} />
        )
    )}
    />
);

const mapStateToProps = (state) => ({
    // nice trick... flip to boolean values because could be undefined if logged out
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PublicRoute);
