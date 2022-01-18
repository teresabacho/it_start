import React from "react";
import style from './Header.module.scss'

export function Header() {

    return (
        <header className={style.header}>
            <div className={style.headerCont}>
                <div className={style.logo}>
                    <a href="#">
                        <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H5.8V49H1V1Z" fill="#262626" stroke="#262626"/>
                            <path d="M34.6 1H10.6V20.2H20.2V25H49V5.8H34.6V1Z" stroke="#262626"/>
                            <path
                                d="M19.7 1.5V5.3H15.9V1.5H19.7ZM19.7 14.9H15.9V11.1H19.7V14.9ZM43.7 15.9V19.7H39.9V15.9H43.7ZM44.7 14.9V11.1H48.5V14.9H44.7ZM35.1 11.1H38.9V14.9H35.1V11.1ZM34.1 6.3V10.1H30.3V6.3H34.1ZM29.3 1.5V5.3H25.5V1.5H29.3ZM24.5 6.3V10.1H20.7V6.3H24.5ZM20.7 19.7V15.9H24.5V19.7H20.7ZM25.5 24.5V20.7H29.3V24.5H25.5ZM30.3 19.7V15.9H34.1V19.7H30.3ZM35.1 20.7H38.9V24.5H35.1V20.7ZM29.3 11.1V14.9H25.5V11.1H29.3ZM43.7 10.1H39.9V6.3H43.7V10.1ZM44.7 20.7H48.5V24.5H44.7V20.7ZM14.9 15.9V19.7H11.1V15.9H14.9ZM14.9 6.3V10.1H11.1V6.3H14.9Z"
                                fill="#262626" stroke="#262626"/>
                            <path
                                d="M24.6236 5.35279L23.9 4.99099V5.8V20.2V21.009L24.6236 20.6472L39.0236 13.4472L39.918 13L39.0236 12.5528L24.6236 5.35279Z"
                                fill="#B3FBD8" stroke="white"/>
                            <path d="M5.8 49H4.9V47.5H1.9V49H1V44.2H1.9V45.7H4.9V44.2H5.8V49Z" fill="white"/>
                            <path d="M5.8 41.5H1.9V43H1V38.2H1.9V39.7H5.8V40.6V41.5Z" fill="white"/>
                            <path
                                d="M5.8 35.0462H5.11429V35.8H4.42857V34.2923H5.11429V32.0308H3.74286V35.0462H3.05714V35.8H1.68571V35.0462H1V31.2769H1.68571V30.5231H2.37143V32.0308H1.68571V34.2923H3.05714V31.2769H3.74286V30.5231H5.11429V31.2769H5.8V35.0462Z"
                                fill="white"/>
                            <path
                                d="M5.8 27.7154H3.05714V29.2231H2.37143V27.7154H1V26.2077H2.37143V24.7H3.05714V26.2077H5.8V27.7154Z"
                                fill="white"/>
                            <path
                                d="M5.8 22.9846H5.11429V23.7385H4.42857V22.9846H3.74286V19.9692H3.05714V22.9846H2.37143V19.2154H3.05714V18.4615H5.8V22.9846ZM5.11429 22.2308V19.9692H4.42857V22.2308H5.11429Z"
                                fill="white"/>
                            <path
                                d="M3.05714 15.4462V14.6923H3.74286V15.4462H5.8V16.9538H2.37143V15.4462H3.05714ZM2.37143 12.4308H3.05714V14.6923H2.37143V12.4308Z"
                                fill="white"/>
                            <path
                                d="M5.8 9.41539H3.05714V10.9231H2.37143V9.41539H1V7.90769H2.37143V6.4H3.05714V7.90769H5.8V9.41539Z"
                                fill="white"/>
                        </svg>
                    </a>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#">
                                Про нас
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Курси
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Контакти
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}