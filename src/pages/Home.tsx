import { Navigate} from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import FeatureItem from '../components/FeatureItem';
import { infosFeatureItem } from '../constants/arrays';
import '../styles/mediaQueries.css'

// home page

const Home = () => {
    const logged = useAppSelector((state) => state.login.isLogged)
    if (!logged) {

        return (
            <main>
                <div className="hero">
                    <section className="hero-content">
                        <h2 className="sr-only">Promoted Content</h2>
                        <p className="subtitle">No fees.</p>
                        <p className="subtitle">No minimum deposit.</p>
                        <p className="subtitle">High interest rates.</p>
                        <p className="text">Open a savings account with Argent Bank today!</p>
                    </section>
                </div>
                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    {
                        infosFeatureItem.map((obj) =>
                            <FeatureItem
                                key={obj.title}
                                icon={obj.icon}
                                title={obj.title}
                                text={obj.text}
                            />
                        )
                    }
                </section>
            </main>
        );

    };
    return <Navigate to="/Profile" />;

};

export default Home;