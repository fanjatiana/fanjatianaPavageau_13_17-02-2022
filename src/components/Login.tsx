import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import { getInfoLoginStatus } from '../features/login/loginStatusSlice';
import { postInfoslogin } from '../services/postInfosLogin';
import { FormData } from '../typeScript/types';

// login form (sign-in page)

const Login = () => {

    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');
    const [rememberMe, setRememberMe] = useState<boolean>(false) 
    // state for display of an error message if username or password unknown
    const [userNotFoundMessage,setUserNotFoundMessage] = useState<string>("") 
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    // form validity (required,error)
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            email: "",
            password: ""
        }
    });


    // submit form data
    const onSubmit = (credentials: object) => {
        postInfoslogin(credentials,setUserNotFoundMessage, dispatch,navigate);
        dispatch(getInfoLoginStatus(true));
    }


    // remember logins when the "Remember Me" box has been checked
    const handleChangeChekbox = () => {
        setRememberMe(!rememberMe);
        console.log(rememberMe)
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                method="POST">
                    <p className='error_400'>{userNotFoundMessage}</p>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={userEmail} {...register("email", { required: true })} onChange={e => { setUserEmail(e.target.value); localStorage.setItem("email", userEmail) }} />
                    <p>{errors.email?.type === 'required' && "email is required"}</p>
                    
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={userPassword} {...register("password", { required: true })} onChange={e =>  setUserPassword(e.target.value) }/>
                    <p>{errors.password && "password is required"}</p>
                    
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" onChange={() => handleChangeChekbox()} />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button" >Sign In</button>
            </form>
        </>
    );
};


export default Login;
