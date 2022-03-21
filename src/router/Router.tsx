import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import NotFound from '../pages/NotFound'
import Profile from '../pages/Profile';
import PrivateRoute from './PrivateRoute';


const Router = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Sign-in" element={<SignIn />} />
                <Route path="/Profile" element={
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