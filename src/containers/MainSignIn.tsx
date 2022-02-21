import React from 'react';
import '../styles/main.css';

import Input from '../components/Input'
import { NavLink } from 'react-router-dom';

const MainSignIn = () => {
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <Input
                        class="input-wrapper"
                        textLabel="Username"
                        typeInput='text'
                        idInput='username'
                    />
                    <Input
                        class="input-wrapper"
                        textLabel="Password"
                        typeInput='password'
                        idInput='password'
                    />
                    <Input
                        class="input-remember"
                        textLabel="Remember me"
                        typeInput='checkbox'
                        idInput='remember-me'
                    />
                    {/*PLACEHOLDER DUE TO STATIC SITE*/}
                    <NavLink to ="/user" className="sign-in-button">Sign In</NavLink>
                    {/*SHOULD BE THE BUTTON BELOW
                    <!-- <button className="sign-in-button">Sign In</button> -->
                   <!--  --> */}
                </form>
            </section>
        </main>
    );
};

export default MainSignIn;