import React from 'react';
import '../styles/main.css';

import Input from '../components/Input'
import { NavLink } from 'react-router-dom';
import { infosInput } from '../constants/arrays';

const MainSignIn = () => {
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    {
                        infosInput.map((obj) =>
                            <Input
                            key={obj.idInput}
                                class={obj.class}
                                textLabel={obj.textLabel}
                                typeInput={obj.typeInput}
                                idInput={obj.idInput}
                            />)
                    }
                    {/*PLACEHOLDER DUE TO STATIC SITE*/}
                    <NavLink to="/user" className="sign-in-button">Sign In</NavLink>
                    {/*SHOULD BE THE BUTTON BELOW
                    <!-- <button className="sign-in-button">Sign In</button> -->
                   <!--  --> */}
                </form>
            </section>
        </main>
    );
};

export default MainSignIn;