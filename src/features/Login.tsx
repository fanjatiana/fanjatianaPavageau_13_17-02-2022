import React from 'react';
import { useForm } from "react-hook-form";

type FormData = {
    username : string,
    password : string
}

const Login = () => {
    const { register, handleSubmit, formState : {errors} } = useForm<FormData>({
        defaultValues:{
            username:"",
            password : ""
        }
    });

    const onSubmit = handleSubmit(data => console.log(data));
    // Submit your data into Redux store
  //const onSubmit = data => props.updateAction(data); =>  <form onSubmit={handleSubmit(onSubmit)}>
  
    return (
        <>
            <form
                onSubmit={onSubmit}
                method="POST">
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" {...register("username", {required:true})}/>
                    <p>{errors.username?.type === 'required' && "username is required"}</p>
                </div>    
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"  {...register("password", {required:true})}/>
                    <p>{errors.password && "password is required"}</p>
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                {/*PLACEHOLDER DUE TO STATIC SITE -->
                <a href="./user.html" className="sign-in-button">Sign In</a>
                <!-- SHOULD BE THE BUTTON BELOW -->*/}
                <button className="sign-in-button">Sign In</button>
            </form>
        </>
    );
};

// Connect your component with redux
//connect(({ firstName, lastName }) => ({ firstName, lastName }), updateAction)(YourForm);

export default Login;
