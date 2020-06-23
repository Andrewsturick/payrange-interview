import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isTokenValid } from '../utils/auth';

const ProtectedRoute = ({redirectTo, ...rest}) => {
    return !isTokenValid(localStorage.getItem("_session")) ? 
        (<Redirect to={redirectTo} />) :
        (<Route {...rest} />)
};

export default ProtectedRoute;