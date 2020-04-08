import React, { useState, useEffect } from 'react';
import {
    Route,
    Redirect
} from 'react-router-dom';

import api from '../services/api';

export default function PrivateRoute(props) {

    const [loaded, setLoaded] = useState(false);
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        async function checkAuth() {
            try {
                await api.get('/auth/checkauth');
                setLogged(true);
            } catch (err) {
                console.log("ERR", err, err.response);
                setLogged(false);
            }
            finally {
                setLoaded(true);
            }
        }

        checkAuth()
    }, []);

    function RenderRoute() {
        if (logged) {
            return <Redirect to="/upload" />
        }
        return <Route {...props} />
    };

    return !loaded ? <> </> : <RenderRoute />
}