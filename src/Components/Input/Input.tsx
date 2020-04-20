import React from 'react';
import { InputWrapper } from './Input.components';
interface InputProps {
    id: string;
    name: string;
}

export const Input = (props: InputProps) => {
    return(<InputWrapper>
        <input id={props.id} name={props.id}  type="text" required/>
        <label htmlFor={props.id}>{props.name}</label>
    </InputWrapper>
    )
}