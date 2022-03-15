import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import SignLink from "../components/SignLink"
import { navLinkListInfosIfConnected, navLinkListInfosIfOffline } from "../constants/arrays";
import { getInfoLoginStatus } from '../features/user/loggedSlice';


const LinksList = () => {

    const dispatch = useAppDispatch();
    const infosUser = useAppSelector((state) => state.user);
    const infoStatus = useAppSelector(state => state.login.isLogged);
    const token = localStorage.getItem("Bearer");

    return <div>
        {
            infoStatus && token ? (
                <div>
                    <ul>
                        <li>
                            <NavLink to="/user" className="main-nav-item" onClick={() => dispatch(getInfoLoginStatus(true))} >
                                <i className="fa fa-user-circle"></i>
                                {infosUser.firstName}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/sign-in" className="main-nav-item" onClick={() => {
                                 dispatch(getInfoLoginStatus(false));localStorage.removeItem("Bearer")
                            }} >
                                <i className="fa fa-sign-out"></i>
                                Sign Out
                            </NavLink>
                        </li>
                    </ul>
                </div>
            ) : (
                <div>
                    <NavLink to="/sign-in" className="main-nav-item" onClick={() => dispatch(getInfoLoginStatus(false))} >
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                </div>
            )
        }
    </div >
}


export default LinksList;