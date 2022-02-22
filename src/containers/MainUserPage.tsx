import React from 'react';
import Account from "../components/Account";
import { dataAccount } from "../constants/arrays"

const MainUserPage = () => {
    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
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
};

export default MainUserPage;