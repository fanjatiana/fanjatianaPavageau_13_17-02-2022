import React from 'react';
import { NavLink } from 'react-router-dom';

const SignLink = (props: { href: string, class: string, classIcon: string, display: string, text: string }) => {
    return (
        <>
            <NavLink to={props.href} className={props.class} style={{ display: props.display }} >
                <i className={props.classIcon}></i>
                {props.text}
            </NavLink>
        </>

    )
};

export default SignLink;