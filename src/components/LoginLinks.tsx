import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getInfoLoginStatus } from '../features/login/loginStatusSlice';
import { useFetch } from '../services/fetchUser';


const LoginLinks = () => {

    const dispatch = useAppDispatch();
    const { isLoading, data, error } = useFetch();
    const [isData, setIsData] = useState(data)
    const infosUser = useAppSelector((state) => state.user);
 
    const token = localStorage.getItem("Bearer");
    return <div>
        {
            data && token ? (
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
                                 dispatch(getInfoLoginStatus(false));localStorage.removeItem("Bearer");setIsData([])
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