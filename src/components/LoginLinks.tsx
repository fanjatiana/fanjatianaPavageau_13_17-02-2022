import { Navigate, NavLink, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getInfoLoginStatus } from '../features/login/loginStatusSlice';
import { useAuth } from '../services/useAuth';
import { UserState } from '../typeScript/interfaces';

// login links ( navigation )

const LoginLinks = () => {

    const dispatch = useAppDispatch();
    const infosUser: UserState = useAppSelector((state) => state.user);
    let auth: boolean = useAuth();
    let location: object = useLocation();

    /* change the display of the connection links according to the data and the token. 
    We update the connection status and apply actions to the click of the links */
    return <div>
        {auth ? (<div>
            <ul className='links_list'>
                <li>
                    <NavLink to="/Profile" className="main-nav-item" >
                        <i className="fa fa-user-circle"></i>
                        {infosUser.firstName}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sign-in" className="main-nav-item" onClick={() => {
                        dispatch(getInfoLoginStatus(false)); localStorage.removeItem("Bearer"); return <Navigate to="/Sign-in" state={{ from: location }} replace />
                    }} >
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </NavLink>
                </li>
            </ul>
        </div>
        ) : (<div>
            <NavLink to="/sign-in" className="main-nav-item" >
                <i className="fa fa-user-circle"></i>
                Sign In
            </NavLink>
        </div>
        )
        }
    </div >
}


export default LoginLinks;