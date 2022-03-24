import { Navigate,useLocation } from 'react-router-dom';
import { useAppDispatch} from '../app/hooks';
import { getInfoLoginStatus } from '../features/login/loginStatusSlice';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const token:boolean = localStorage.getItem("Bearer") !== null;
    const dispatch = useAppDispatch();
   
    const useAuth = () => {
        // if there is a token, the connection status changes to true and the token is returned
        if (token) {
            dispatch(getInfoLoginStatus(true))
        } return token
    }

    let auth:boolean = useAuth();
    let location:object = useLocation();
    console.log(location)

    // if we have no authentication, redirect to the sign in page and we replace the current url
    if (!auth) {
        return <Navigate to="/Sign-in" state={{ from: location }} replace />;
    };
    return children;
}

export default PrivateRoute;