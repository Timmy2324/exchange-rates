import React from 'react'
import s from "./Select.module.css"

const Select = (props) => {
    const {
        options,
        onChange,
        className,
        ...restProps
    } = props;

    const mappedOptions = options ? options.map((o, i) => (
            <option className={s.option} key={i} value={o}>
                    {o}
            </option>
        ))
        : [];

    const onChangeCallback = (e) => {
        onChange && onChange(e.target.value);
    }

    const finalSelectClassName = `${s.select} ${className}`

    return (
        <select className={finalSelectClassName} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default Select
