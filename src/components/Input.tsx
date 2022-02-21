import React from 'react';

const Input = (props:{class:string,textLabel:string, typeInput:string, idInput:string}) => {
    return (
        <div className={props.class}>
            <label>{props.textLabel}</label>
            <input type={props.typeInput} id={props.idInput} />
        </div>
    );
};

export default Input;