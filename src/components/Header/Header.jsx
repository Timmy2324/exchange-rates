import React from 'react';
import s from "./Header.module.css";
import Select from "../Select/Select";

const Header = () => {
    const arrLanguage = ["RU", "ENG"]
    return (
        <header className={s.header}>
            <div className={`${s.headerWrapper} container`}>
                <span>LOGO</span>
                <Select options={arrLanguage}/>
            </div>
        </header>
    );
};

export default Header;