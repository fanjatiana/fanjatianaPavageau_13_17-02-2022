import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { dataAccount } from '../constants/arrays';
import { getToken } from '../features/token/tokenSlice';



const Login = () => {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    type FormData = {
        email: string,
        password: string
    }
    // gestion de la validité du formulaire (required,error)
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const postInfoslogin = async (credentials: object) => {
        console.log(credentials)
        await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                dispatch(getToken(data.body.token));
                localStorage.setItem("Bearer", data.body.token)
                navigate('/user');
            })
            .catch((error) => {
                console.error("sdgs" + error.message);

            });

    };

    // envoie des données entrées dans formulaire
    const onSubmit = (credentials: object) => {
        postInfoslogin(credentials);
        console.log(credentials)
    }

    const handleChangeChekbox = () => {
         console.log(localStorage.setItem(userEmail, userPassword));
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                method="POST">
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" {...register("email", { required: true })} onChange={e => { return setUserEmail(e.target.value) }} />
                    <p>{errors.email?.type === 'required' && "email is required"}</p>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"  {...register("password", { required: true })} onChange={e => { return setUserPassword(e.target.value) }} />
                    <p>{errors.password && "password is required"}</p>
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me"  onChange = {handleChangeChekbox}/>
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                {/*PLACEHOLDER DUE TO STATIC SITE -->
                <a href="./user.html" className="sign-in-button">Sign In</a>
                <!-- SHOULD BE THE BUTTON BELOW -->*/}
                <button className="sign-in-button" >Sign In</button>
            </form>
        </>
    );
};


export default Login;
