import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import NotFound from '../pages/NotFound'
import Profile from '../pages/Profile';
import PrivateRoute from './PrivateRoute';

// path list of application pages

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/profile" element={
                    < PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                }
                >
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
};

export default Router;