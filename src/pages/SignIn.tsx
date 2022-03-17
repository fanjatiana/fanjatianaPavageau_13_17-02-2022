import '../styles/mediaQueries.css'
import Login from '../components/Login';

const SignIn = () => {
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

export default SignIn;