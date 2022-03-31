import { Navigate} from 'react-router-dom';
import { useAuth } from '../services/useAuth';

/* private route for securing the user account space (profile page).
The user is redirected to Sign-in page when it !auth */

const PrivateRoute = ({ children }: { children: JSX.Element }) => {

    let auth: boolean = useAuth();

    // if we have no authentication, redirect to the sign in page when someone write "Profile" in url
    if (!auth) {
        return <Navigate to="/sign-in" />;
    };
    return children;
}

export default PrivateRoute;

