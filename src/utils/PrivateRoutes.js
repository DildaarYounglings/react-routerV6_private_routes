import React from 'react';
import {Outlet,Navigate} from 'react-router-dom';

export const PrivateRoutes = () => {
    let auth = {'token': true,'role':"user",}
  return (
    <>  
        {(auth.token === true & auth.role == "user")? <Outlet/> : <Navigate to="/login"/>}
    </>
    
  )
}
