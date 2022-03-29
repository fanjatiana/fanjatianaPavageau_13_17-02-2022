import { Navigate,useLocation } from 'react-router-dom';
import { useAuth } from '../services/useAuth';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {

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