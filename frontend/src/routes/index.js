import React from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';

import Login from '../auth/login';
import Upload from '../upload';

import PrivateRoute from './privateRoute';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/upload" component={Upload} />
        </BrowserRouter>
    );
};
