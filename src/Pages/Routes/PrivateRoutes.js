import React from 'react';
import {Navigate} from 'react-router-dom';
const PrivateRoute = ({ children}) => {
    const isAuthenticated = localStorage.getItem("user")?true:false;
        
    if (isAuthenticated ) {
      return children
    }
      
    return <Navigate to="/Login" />
  }
export default PrivateRoute;