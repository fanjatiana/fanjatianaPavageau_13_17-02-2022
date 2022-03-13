import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useFetch } from '../api/fetchUser';
import { useAppSelector } from '../app/hooks';
import Account from "../components/Account";
import { dataAccount } from "../constants/arrays"
import { getInfoLoginStatus } from '../features/user/loggedSlice';
import { getInfosUsers } from '../features/user/usersSlice';

import NotFound from '../pages/NotFound';

const MainUserPage = () => {

    const { isLoading, data, error } = useFetch();
    const [isLoging, setIsLoging] = useState(false);
    const infosUser = useAppSelector((state) => state.user);
    const dispatch = useDispatch();
    //const infoToken = useAppSelector((state) => state.token.value);
    const infoToken = localStorage.getItem("Bearer")

    const [isEditName, setIsEditName] = useState(false);
    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');

    type FormData = {
        firstName: string,
        lastName: string
    }

    const handleClickToSave = () => {

        const newInfosUser = {
            firstName: userFirstName,
            lastName: userLastName
        }

        const putInfosUser = async () => {

            fetch("http://localhost:3001/api/v1/user/profile", {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${infoToken}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstName: userFirstName,
                    lastName: userLastName
                }),
            })
                .then(async (response) => {
                    const data = await response.json();
                    if (response.ok) {
                        console.log(data.body)
                        dispatch(getInfosUsers(data.body));
                        setIsLoging(true)
                    }
                })
        };

        putInfosUser();
        setIsEditName(false)
    }
    const handleClickToCancel = () => {
        setIsEditName(false)
    };




    if (error) return <NotFound />;

    if (data && infoToken) {
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
                        <button onClick={handleClickToSave}>Save</button>
                        <button onClick={handleClickToCancel}>Cancel</button>
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
        );

    }
    return <> is loading </>

};

export default MainUserPage;