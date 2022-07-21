import React from 'react';
import s from "./Header.module.css";
import Select from "../Select/Select";
import logo from "../../img/logo.svg";

const arrLanguage = ["RU", "ENG"];

const Header = (props) => {

    const {
        changeLanguage,
    } = props;


    return (
        <header className={s.header}>
            <div className={`${s.headerWrapper} container`}>
                <div className={s.logo}>
                    <img alt={'logo'} className={s.logoImg} src={logo}/>
                    <span className={s.logoName}>exchange rate</span>
                </div>

                <Select options={arrLanguage} onChange={changeLanguage}/>
            </div>
        </header>
    );
};

export default Header;