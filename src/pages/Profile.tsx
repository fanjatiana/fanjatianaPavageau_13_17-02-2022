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

// user account page

const Profile = () => {
    const { isLoading, data, error } = useFetch();
   
    // for display (state update) of the edit name form when the edit Name button is clicked
    const [isEditName, setIsEditName] = useState<boolean>(false);

    const [userFirstName, setUserFirstName] = useState<string>('');
    const [userLastName, setUserLastName] = useState<string>('');
    const infosUser = useAppSelector<UserState>((state) => state.user);
    const dispatch = useDispatch<any>();
    const token: string | null = localStorage.getItem("Bearer");
 

    /* put (fetch method) edit name form data with update of the user's identity on the profile page */
    /* setIsEditName(false) => closing the form */
    const handleClickToSave = () => {
        putInfosUser(token, userFirstName, userLastName, dispatch);
        setIsEditName(false)
    }

    const handleClickToCancel = () => {
        setIsEditName(false)
    };

    if (error) return <NotFound />;

    if (data) {
        const userIdentity: string = infosUser.firstName + " " + infosUser.lastName;

        return (
            <main className="main main_profile bg-dark">
                <div className="header">
                    <h2>Welcome back<br />{userIdentity}!</h2>
                    {!isEditName ? <button className="edit-button" onClick={() => setIsEditName(true)}>Edit Name</button> : <div className='edit-name'>
                        <div className='input_block'>
                            <div>
                                <label htmlFor="firstName"></label>
                                <input type="text" id='firstName' placeholder={infosUser.firstName} onChange={e => { return setUserFirstName(e.target.value) }} />
                            </div>
                            <div>
                                <label htmlFor="lastName"></label>
                                <input type="text" id='lastName' placeholder={infosUser.lastName} onChange={e => { return setUserLastName(e.target.value) }} />
                            </div>
                        </div>
                        <div className='btn_action'>
                            <div className='btn_save'>
                                <button onClick={handleClickToSave}>Save</button>
                            </div>
                            <div className='btn_cancel'>
                                <button onClick={handleClickToCancel}>Cancel</button>
                            </div>
                        </div>
                    </div>
                    }
                </div>
                <h3 className="sr-only">Accounts</h3>
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