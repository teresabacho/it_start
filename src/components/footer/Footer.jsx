import React from "react";
import style from './Footer.module.scss';
import logo from "../../assets/images/logofooter.svg";
import up from "../../assets/images/up.svg";

export function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.footerWrapper}>

                <div className={style.footerCont}>
                    <a href="#" className={style.logoFooter}>
                        <img src={logo} alt="logo"/>
                    </a>
                    <div>
                        <a href="mailto:itstart@gmail.com">ITSTART@GMAIL.COM</a>
                        <a href="tel:+380972025850">+380 (97) 202-58-50</a>
                    </div>
                    <a href="#" className={style.up}>
                        <img src={up} alt="logo"/>
                    </a>
                </div>

            </div>
        </footer>
    );
}

export default Footer;