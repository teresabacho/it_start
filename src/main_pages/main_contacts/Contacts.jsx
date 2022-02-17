import React, {useCallback, useState} from "react";
import Fade from 'react-reveal/Fade';
import style from "./Contacts.module.scss";
import BlockTitle from "../../components/title/BlockTitle";
import CourseButton from "../../components/course_button/CourseButton";


export function Contacts() {
    return (
        <section id={'main_contacts'} className={style.mainBlock}>

            {/*<div className={style.mainBlock}>*/}
            <div className={style.titleWrapper}>
                <BlockTitle/>
            </div>

            <div className={style.mainBlockCont}>
                <div className={style.mainBlockWrapper}>
                    <div className={style.left}>
                        <Fade left>
                            <span className={style.title}>Ми вам передзвонимо</span>
                        </Fade>
                        <form action="">
                            <Fade left delay={200}>
                                <input type="text" placeholder="Ім'я"/>
                            </Fade>
                            <Fade left delay={250}>
                                <input type="text" placeholder="Телефон"/>
                            </Fade>
                            <Fade left delay={300}>
                                <input type="text" placeholder="Повідомлення"/>
                            </Fade>
                            <Fade left delay={350}>
                                <button>Надіслати</button>
                            </Fade>
                        </form>
                    </div>

                    <div className={style.right}>
                        <Fade right>
                            <div className={style.top}>
                                або
                                <h5>Подзвоніть/напишіть нам</h5>
                            </div>
                        </Fade>
                        <div className={style.bottom}>
                            <Fade right delay={200}>
                                <a href="mailto:itstart@gmail.com">ITSTART@GMAIL.COM</a>
                            </Fade>
                            <Fade right delay={250}>
                                <a href="tel:+380972025850">+380 (97) 202-58-50</a>
                            </Fade>
                            <Fade right delay={300}>
                                <p>Команда ItStart</p>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>

            {/*</div>*/}

        </section>
    )
}

export default Contacts;