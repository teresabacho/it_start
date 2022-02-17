import React from "react";
import Fade from 'react-reveal/Fade';
import style from './Footer.module.scss';
import * as Scroll from 'react-scroll';
import {Link, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll';

import logo from "../../assets/images/logofooter.svg";
import up from "../../assets/images/up.svg";

export function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.footerWrapper}>

                <div className={style.footerCont}>
                    <Fade bottom>
                        <a href="#" className={style.logoFooter}>
                            <img src={logo} alt="logo"/>
                        </a>
                    </Fade>

                    <Fade bottom>
                        <div>
                            <a href="mailto:itstart@gmail.com">ITSTART@GMAIL.COM</a>
                            <a href="tel:+380972025850">+380 (97) 202-58-50</a>
                        </div>
                    </Fade>

                    <Link activeClass={style.active}
                          to="main_home"
                          spy={true}
                          smooth={true}
                          duration={500}>
                        <a href="#" className={style.up}>
                            <Fade bottom>
                                <img src={up} alt="logo"/>
                            </Fade>
                        </a>
                    </Link>

                </div>

            </div>
        </footer>
    );
}

export default Footer;