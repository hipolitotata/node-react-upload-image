import React from 'react';

// import { createBrowserHistory } from "history";

import { Switch } from 'react-router-dom';

import Login from '../auth/login';
import Upload from '../upload';

import AuthRoute from './auth-route';
import PrivateRoute from './private-route';

export default function RoutesPage() {
    return (
        <Switch>
            <AuthRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/upload" component={Upload} />
        </Switch>
    );
};
