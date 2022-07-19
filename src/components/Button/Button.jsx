import React from 'react'
import s from './Button.module.css'


const Button = (props) => {
    const {
        className,
        disabled,
        active,
        ...restProps
    } = props;

    const btnClassName = `${s.btn} ${className} ${active ? s.active : ''}`;

    return (
        <button
            className={btnClassName}
            disabled={disabled}
            {...restProps}
        />
    )
}

export default Button