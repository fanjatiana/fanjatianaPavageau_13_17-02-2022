import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import { getInfoLoginStatus } from '../features/login/loginStatusSlice';
import { postInfoslogin } from '../services/postInfosLogin';

const Login = () => {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [rememberMe, setRememberMe] = useState("false")
    const [isLoging, setIsLoging] = useState(false);
    
    // state for display of an error message if username or password unknown
    const [userNotFound,setUserNotFound] = useState("")
    
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    type FormData = {
        email: string,
        password: string
    }

    // form validity (required,error)
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            email: "",
            password: ""
        }
    });


    // submit form data
    const onSubmit = (credentials: object) => {
        postInfoslogin(credentials,setUserNotFound, dispatch, setIsLoging, navigate);
        dispatch(getInfoLoginStatus(true));
        setIsLoging(true);
    }


    // remember logins when the "Remember Me" box has been checked
    const handleChangeChekbox = () => {
        const infoEmail = localStorage.getItem("email");
        setRememberMe('true')
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                method="POST">
                    <p className='error_400'>{userNotFound}</p>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username"  {...register("email", { required: true })} onChange={e => { setUserEmail(e.target.value); localStorage.setItem("email", userEmail) }} />
                    <p>{errors.email?.type === 'required' && "email is required"}</p>
                    
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"  {...register("password", { required: true })} onChange={e => { setUserPassword(e.target.value); localStorage.setItem("password", userPassword) }} />
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
