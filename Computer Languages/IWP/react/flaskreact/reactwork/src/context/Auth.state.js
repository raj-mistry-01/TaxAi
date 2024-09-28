import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import AuthContext from './Auth.context';

const value = 10;

const AuthContextCheckState = (props) => {
    return (
        <AuthContext.Provider value={{ value }}>
            {props.children}
        </AuthContext.Provider>
    );
};

const CookieCheck = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const authToken = Cookies.get('authToken');
        console.log(authToken)
        if (authToken) {
            navigate('/test');
        }
    }, []);

    return null;
};

export { CookieCheck, AuthContextCheckState };
