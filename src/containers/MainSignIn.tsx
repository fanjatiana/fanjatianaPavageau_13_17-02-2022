import React from 'react';
import '../styles/main.css';
import Login from '../features/Login'
import Input from '../components/Input'
import { NavLink } from 'react-router-dom';
import { infosInput } from '../constants/arrays';

const MainSignIn = () => {
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <Login />
            </section>
        </main>
    );
};

export default MainSignIn;