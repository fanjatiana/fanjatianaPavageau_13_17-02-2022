import { Navigate, NavLink} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getInfoLoginStatus } from '../features/login/loginStatusSlice';
import { UserState } from '../typeScript/interfaces';

// login links ( navigation )

const LoginLinks = () => {

    const dispatch = useAppDispatch();
    const infosUser: UserState = useAppSelector((state) => state.user);
    const logged = useAppSelector((state) => state.login.isLogged)
    console.log(logged);
    

    /* change the display of the login links according to the data and the token. 
    We update the connection status and apply actions to the click of the links */
    return <div>
        {logged ? (<div>
            <ul className='links_list'>
                <li>
                    <NavLink to="/Profile" className="main-nav-item" >
                        <i className="fa fa-user-circle"></i>
                        {infosUser.firstName}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sign-in" className="main-nav-item" onClick={() => {
                        dispatch(getInfoLoginStatus(false)); localStorage.removeItem("Bearer");return <Navigate to="/Sign-in" />;
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