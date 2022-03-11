import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import SignLink from "../components/SignLink"
import { navLinkListInfosIfConnected, navLinkListInfosIfOffline } from "../constants/arrays"


const LinksList = () => {

    const dispatch = useAppDispatch();

    //const isLoging: boolean = false; // gestion du state
    const [isLoging, setIsLoging] = useState(false);



    return <div>
        {

            !isLoging ?
                (
                    <div>
                        <NavLink to="/sign-in" className="main-nav-item" onClick = {() => setIsLoging(true)} >
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </NavLink>
                    </div>

                ) : (
                    <div>
                        <ul>
                            <li>
                                <NavLink to="/sign-in" className="main-nav-item" >
                                    <i className="fa fa-user-circle"></i>
                                    Tony
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="main-nav-item" onClick = {() => setIsLoging(false)} >
                                    <i className="fa fa-sign-out"></i>
                                    Sign Out
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                )
        }
    </div >
}


export default LinksList;