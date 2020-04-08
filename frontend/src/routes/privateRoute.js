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
                const response = await api.get('/auth/checkauth');
                console.log(response);
                setLogged(true);
            } catch (err) {
                console.log(err, err.response);
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
            if (props.login) {
                return <Redirect to="/upload" />
            }
            return <Route {...props} />
        }
        return <Redirect to="/login" />
    };

    return !loaded ? <> </> : <RenderRoute />
}