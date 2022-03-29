import { NavLink} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getInfoLoginStatus } from '../features/login/loginStatusSlice';
import { useAuth } from '../services/useAuth';
import { UserState } from '../typeScript/interfaces';


const LoginLinks = () => {

    const dispatch = useAppDispatch();
    const infosUser: UserState = useAppSelector((state) => state.user);  
    const token: string | null = localStorage.getItem("Bearer");
    let auth:boolean = useAuth();

    /* change the display of the connection links according to the data and the token. 
    We update the connection status and apply actions to the click of the links */

    return <div>
        { auth && token ? (
            <div>
                <ul className='links_list'>
                    <li>
                        <NavLink to="/Profile" className="main-nav-item" onClick={() => dispatch(getInfoLoginStatus(true))} >
                            <i className="fa fa-user-circle"></i>
                            {infosUser.firstName}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/sign-in" className="main-nav-item" onClick={() => {
                            dispatch(getInfoLoginStatus(false)); localStorage.removeItem("Bearer");
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


export default LoginLinks;