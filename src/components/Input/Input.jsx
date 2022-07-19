import React from 'react'
import s from './Input.module.css'


const Input = (props) => {

    const {
        type = 'text',
        onChange,
        onEnter,
        className,
        ...restProps
    } = props;

    const onChangeCallback = (e) => {
        onChange && onChange(e.currentTarget.value)

    }
    const onKeyPressCallback = (e) => {
        onEnter && e.key === 'Enter' && onEnter()
    }

    const finalInputClassName = `${s.input} ${className}`

    return (
        <div>
            <input
                type={type}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}
                {...restProps}
            />
        </div>
    )
}

export default Input
