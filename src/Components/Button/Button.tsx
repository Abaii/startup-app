import React from 'react';
import { CallToAction } from './Button.components';

interface ButtonProps {
    text: string
    width?: string;
}
export const Button = (props: ButtonProps) => {
    const { text, width } = props;
    return (
        <CallToAction width={width}>{text}</CallToAction>        
    )
}