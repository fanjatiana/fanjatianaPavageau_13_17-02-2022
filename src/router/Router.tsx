import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import User from '../pages/User';
import NotFound from '../pages/NotFound'

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path='/user' element={<User/>} />
                <Route path='*' element={<NotFound/>} />
            </Routes>
        </>
    );
};

export default Router;