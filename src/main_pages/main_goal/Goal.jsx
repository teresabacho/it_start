import React, {useCallback, useState} from "react";
import Fade from 'react-reveal/Fade';
import style from "./Goal.module.scss";
import BlockTitle from "../../components/title/BlockTitle";
import CourseButton from "../../components/course_button/CourseButton";

import personR from "../../assets/images/personR.svg";
// import textR from "../../assets/images/textRight.svg";
import personL from "../../assets/images/personL.svg";

export function Goal() {
    return (
        <section id={'main_goal'} className={style.mainBlock}>
            <BlockTitle/>

            <div className={style.mainBlockCont}>

                <div className={style.upperBox}>
                    <div className={style.upperBoxLeft}>

                        <Fade left>
                            <p className={style.p1}>нам набридло бачити на просторах інтернету
                                <span> неефективні</span> курси, які
                                “гарантовано” забезпечують
                                працевлаштування після їх проходження, тому ми вирішили створити те, що
                                справді <span>варте уваги</span>.</p>
                        </Fade>

                        <Fade left>
                            <p className={style.p2}> Якщо ви стикаєтеся з <span>тими ж проблемами</span>, що і
                                всі новачки:</p>
                        </Fade>

                        <Fade left cascade>
                            <ul>
                                <Fade left>
                                    <li>З чого стартувати?</li>
                                </Fade>
                                <Fade left>
                                    <li>Який напрям вибрати, щоб було цікаво?</li>
                                </Fade>
                                <Fade left>
                                    <li>Як ефективно вчитися і поєднувати це з роботою/навчанням?</li>
                                </Fade>
                                <Fade left>
                                    <li>Як знайти портібну вакансію?</li>
                                </Fade>
                                <Fade left>
                                    <li>Як перейти до практики і перестати боятись помилок?</li>
                                </Fade>
                            </ul>
                        </Fade>
                    </div>
                    <Fade right>
                        <div className={style.upperBoxRightImg}>
                            <img src={personR} alt="Person right" className={style.person}/>
                        </div>
                    </Fade>
                </div>

                <div className={style.downBox}>
                    <div className={style.downBoxRight}>
                        <Fade right>
                            <p className={style.p3}>
                                На <span>ITStart</span> вам допоможуть переконатися в тому, що незважаючи на всі
                                страхи і
                                сумніви,
                                <span> кожен здатний</span> реазуватися в IT.
                            </p>
                        </Fade>

                        <Fade right>
                            <p className={style.p4}>
                                Головне - мати <span>інтерес до сфери</span> і чітке бачення, куди йти.
                            </p>
                        </Fade>

                        <Fade right>
                            <p className={style.p5}>
                                Перше у вас вже є, а друге ви <span>отримаєте на курсах.</span>
                            </p>
                        </Fade>
                    </div>

                    <Fade left>
                        <div className={style.downBoxLeftImg}>
                            <img src={personL} alt="Person right" className={style.personL}/>
                        </div>
                    </Fade>

                    <Fade right>
                        <div className={style.btn}>
                            <CourseButton/>
                        </div>
                    </Fade>


                </div>

            </div>

        </section>
    )
}

export default Goal;