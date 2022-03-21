import { Navigate,useLocation } from 'react-router-dom';
import { useAppDispatch} from '../app/hooks';
import { getInfoLoginStatus } from '../features/login/loginStatusSlice';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const token = localStorage.getItem("Bearer") !== null;
    const dispatch = useAppDispatch();
    const useAuth = () => {
        if (token) {
            dispatch(getInfoLoginStatus(true))
        } return token
    }

    let auth = useAuth();
    let location = useLocation();
    console.log(location)

    if (!auth) {
        return <Navigate to="/Sign-in" state={{ from: location }} replace />;
    };
    return children;
}

export default PrivateRoute;