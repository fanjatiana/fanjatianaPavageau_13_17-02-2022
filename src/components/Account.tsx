import React from 'react';

const Account = (props : {title:string, value:string, status:string}) => {
    return (
        <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">{props.title}</h3>
                    <p className="account-amount">{props.value}</p>
                    <p className="account-amount-description">{props.status}</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
    );
};

export default Account;