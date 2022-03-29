import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFetch } from '../services/fetchUser';
import { useAppSelector } from '../app/hooks';
import Account from '../components/Account';
import { dataAccount } from '../constants/arrays';
import '../styles/mediaQueries.css'
import NotFound from './NotFound';
import { putInfosUser } from '../services/putInfosUser';
import { UserState } from '../typeScript/interfaces';

const Profile = () => {
    const { isLoading, data, error } = useFetch();
    const [isLoging, setIsLoging] = useState<boolean>(false);

    // display (state update) of the edit name form when the edit Name button is clicked
    const [isEditName, setIsEditName] = useState<boolean>(false);

    const [userFirstName, setUserFirstName] = useState<string>('');
    const [userLastName, setUserLastName] = useState<string>('');
    const infosUser = useAppSelector<UserState>((state) => state.user);
    const dispatch = useDispatch<any>();
    const token: string | null = localStorage.getItem("Bearer")

    const handleClickToSave = () => {
        putInfosUser(token, userFirstName, userLastName, dispatch, setIsLoging);
        setIsEditName(false)
    }

    const handleClickToCancel = () => {
        setIsEditName(false)
    };

    if (error) return <NotFound />;

    if (data) {
        const userIdentity: string = infosUser.firstName + " " + infosUser.lastName;

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