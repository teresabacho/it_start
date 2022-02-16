import React, {useCallback, useState} from "react";
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
                        <p className={style.p1}>нам набридло бачити на просторах інтернету
                            <span> неефективні</span> курси, які
                            “гарантовано” забезпечують
                            працевлаштування після їх проходження, тому ми вирішили створити те, що
                            справді <span>варте уваги</span>.</p>

                        <p className={style.p2}> Якщо ви стикаєтеся з <span>тими ж проблемами</span>, що і
                            всі новачки:</p>

                        <ul>
                            <li>З чого стартувати?</li>
                            <li>Який напрям вибрати, щоб було цікаво?</li>
                            <li>Як ефективно вчитися і поєднувати це з роботою/навчанням?</li>
                            <li>Як знайти портібну вакансію?</li>
                            <li>Як перейти до практики і перестати боятись помилок?</li>
                        </ul>
                    </div>

                    <div className={style.upperBoxRightImg}>
                        <img src={personR} alt="Person right" className={style.person}/>
                    </div>
                </div>

                <div className={style.downBox}>
                    <div className={style.downBoxRight}>
                        <p className={style.p3}>
                            На <span>ITStart</span> вам допоможуть переконатися в тому, що незважаючи на всі
                            страхи і
                            сумніви,
                            <span> кожен здатний</span> реазуватися в IT.
                        </p>

                        <p className={style.p4}>
                            Головне - мати <span>інтерес до сфери</span> і чітке бачення, куди йти.
                        </p>

                        <p className={style.p5}>
                            Перше у вас вже є, а друге ви <span>отримаєте на курсах.</span>
                        </p>
                    </div>

                    <div className={style.downBoxLeftImg}>
                        <img src={personL} alt="Person right" className={style.personL}/>
                    </div>

                    <div className={style.btn}>
                        <CourseButton/>
                    </div>



                </div>

            </div>

        </section>
    )
}

export default Goal;