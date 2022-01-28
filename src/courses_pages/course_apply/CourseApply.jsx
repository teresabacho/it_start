import React, {useCallback, useState} from "react";
import style from "./CourseApply.module.scss";
import BlockTitle from "../../components/title/BlockTitle";

import applyPerson from "../../assets/images/applyPerson.svg";




export function CourseApply() {
    return (
        <section id={'course_apply'} className={style.mainBlock}>
            <div className={style.titleWrapper}>
                <BlockTitle/>
            </div>

            <div className={style.mainBlockCont}>
                <div className={style.mainBlockWrapper}>
                    <div>
                        <img src={applyPerson} alt="person"/>
                    </div>
                    <div className={style.apply}>
                        <form action="">
                            <input type="text" placeholder="Ім'я"/>
                            <input type="text" placeholder="Прізвище"/>
                            <input type="text" placeholder="Телефон"/>
                            <input type="text" placeholder="Повідомлення"/>
                            <button>Надіслати</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CourseApply;