import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFetch } from '../services/fetchUser';
import { useAppSelector } from '../app/hooks';
import Account from '../components/Account';
import { dataAccount } from '../constants/arrays';
import '../styles/mediaQueries.css'
import NotFound from './NotFound';
import { putInfosUser } from '../services/putInfosUser';
import { Navigate } from 'react-router-dom';

const Profile = () => {
    const { isLoading, data, error } = useFetch();
    const [isLoging, setIsLoging] = useState(false);
    const [isEditName, setIsEditName] = useState(false);
    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const infosUser = useAppSelector((state) => state.user);
    const dispatch = useDispatch();
    const infoToken = localStorage.getItem("Bearer")

    const handleClickToSave = () => {
        putInfosUser(infoToken,userFirstName,userLastName,dispatch,setIsLoging);
        setIsEditName(false)
    }
    
    const handleClickToCancel = () => {
        setIsEditName(false)
    };
  

    if (error) return <NotFound />;

    if (infoToken) {
        const userIdentity = infosUser.firstName + " " + infosUser.lastName;

        return (
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />{userIdentity}!</h1>
                    {!isEditName ? <button className="edit-button" onClick={() => setIsEditName(true)}>Edit Name</button> : <div className='edit-name'>
                        <div>
                            <label htmlFor="firstName"></label>
                            <input type="text" id='firstName' placeholder={infosUser.firstName} onChange={e => { return setUserFirstName(e.target.value) }} />
                        </div>
                        <div>
                            <label htmlFor="lastName"></label>
                            <input type="text" id='lastName' placeholder={infosUser.lastName} onChange={e => { return setUserLastName(e.target.value) }} />
                        </div>
                        <div className='btn_action'>
                            <button onClick={handleClickToSave}>Save</button>
                            <button onClick={handleClickToCancel}>Cancel</button>
                        </div>
                    </div>
                    }
                </div>
                <h2 className="sr-only">Accounts</h2>
                {
                    dataAccount.map((obj) =>
                        <Account
                            key={obj.title}
                            title={obj.title}
                            value={obj.value}
                            status={obj.status}
                        />)
                }
            </main>
        )
    }
    return <>{isLoading}</>
};

export default Profile;