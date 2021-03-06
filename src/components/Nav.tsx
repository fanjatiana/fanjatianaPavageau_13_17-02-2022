import { NavLink } from 'react-router-dom';
import Logo from '../images/argentBankLogo.png'
import LoginLinks from "../components/LoginLinks"

// navigation component

const Nav = () => {
    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo" >
                <img
                    className="main-nav-logo-image"
                    src={Logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <LoginLinks/>
        </nav>
    );
};

export default Nav;