import React from 'react';

import { createBrowserHistory } from "history";
import {
    BrowserRouter,
    Route
} from 'react-router-dom';

import Login from '../auth/login';
import Upload from '../upload';

import PrivateRoute from './privateRoute';

const history = createBrowserHistory();

export default function Routes() {
    return (
        <BrowserRouter history={history}>
            <PrivateRoute login exact path="/login" component={Login} />
            <PrivateRoute exact path="/upload" component={Upload} />
        </BrowserRouter>
    );
};
