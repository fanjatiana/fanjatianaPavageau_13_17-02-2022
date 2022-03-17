import { Link } from 'react-router-dom';
import PiggyBank from '../images/piggy_bank.png'
import '../styles/main.css'
const NotFound = () => {
    /* author of this img : "http://www.freepik.com">*/
    return (
        <div className='error_404'>
            <div className='block_img'>
                <img
                    src={PiggyBank}
                    alt="tirelire cochon avec le texte oops page not found" />
            </div>
            <div className='block_link'>
                <Link to="/" className='link_back-to-home'>
                    Retour vers la page d'accueil
                </Link>
            </div>
        </div >
    );
};

export default NotFound;