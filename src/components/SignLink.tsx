import React from 'react';
import { NavLink } from 'react-router-dom';

const SignLink = (props: {  href: string,  classIcon: string,  text: string }) => {
    return (
        <>
            <NavLink to={props.href} className="main-nav-item" >
                <i className={props.classIcon}></i>
                {props.text}
            </NavLink>
        </>
    )
};

export default SignLink;