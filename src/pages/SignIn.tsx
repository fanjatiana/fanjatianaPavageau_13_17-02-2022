import '../styles/mediaQueries.css'
import Login from '../components/Login';
import { useAuth } from '../services/useAuth';
import { Navigate } from 'react-router-dom';

// login page

const SignIn = () => {
    let auth: boolean = useAuth();
    if (!auth) {
        return (
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h2>Sign In</h2>
                    <Login />
                </section>
            </main>
        );
    };
    return <Navigate to="/profile" />;
}

export default SignIn;