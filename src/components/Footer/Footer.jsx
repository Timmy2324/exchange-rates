import React from 'react';
import s from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={'container'}>
                &#169; 2022
            </div>
        </footer>
    );
};

export default Footer;