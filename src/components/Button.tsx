import React from 'react'
import { ReactNode } from "react";
interface Props{
    children: ReactNode;
    color?: 'primary'|'secondary' | 'danger';
    onClick: () => void;
}

const Button = ({ children, color = 'primary', onClick }: Props) => {
    return (
        <button className = {'btn btn-' + color} onClick = {onClick}>{children}</button>
    )
}



export default Button


