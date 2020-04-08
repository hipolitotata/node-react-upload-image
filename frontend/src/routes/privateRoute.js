import React, { useState, useEffect } from 'react';
import {
    Route,
    Redirect
} from 'react-router-dom';

export default function PrivateRoute(props) {

    const [loaded, setLoaded] = useState(false);
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        async function checkAuth() {
            setTimeout(() => {
                setLogged(false);
                setLoaded(true);
            }, 3000)
        }

        checkAuth()
    }, []);

    return (
        !loaded ? <> </> :
            logged ? <Route {...props} /> : <Redirect to="/login" />
    )
}