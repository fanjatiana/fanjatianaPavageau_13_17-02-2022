import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';

const PrivateOutlet = () => {
    const infosUser = useAppSelector((state) => state.user);
   return infosUser ? <Outlet/> : <Navigate to="/Sign-in"/>
};

export default PrivateOutlet;