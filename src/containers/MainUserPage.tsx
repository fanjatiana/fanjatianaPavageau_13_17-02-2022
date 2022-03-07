import React, { useState } from 'react';

import { useFetch } from '../api/fetchUser';
import { useAppSelector } from '../app/hooks';
import Account from "../components/Account";
import { dataAccount } from "../constants/arrays"

import NotFound from '../pages/NotFound';

const MainUserPage = () => {

    const { isLoading, data, error } = useFetch();
    const infosUser = useAppSelector((state) => state.user);

    if (error) return <NotFound />;

    if (data) {

        const userIdentity = infosUser.firstName + " " + infosUser.lastName;

        return (
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />{userIdentity}!</h1>
                    <button className="edit-button">Edit Name</button>
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