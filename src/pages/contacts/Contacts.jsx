import React, {useCallback, useState} from "react";
import style from "./Contacts.module.scss";
import BlockTitle from "../../components/blockTitle/BlockTitle";
import CourseButton from "../../components/courseButton/CourseButton";


export function Contacts() {
    return (
        <div className={style.mainBlock}>
            <div className={style.titleWrapper}>
                <BlockTitle/>
            </div>

            <div className={style.mainBlockCont}>
                <div className={style.mainBlockWrapper}>
                    <div className={style.left}>
                        <span className={style.title}>Ми вам передзвонимо</span>
                        <form action="">
                            <input type="text" placeholder="Ім'я"/>
                            <input type="text" placeholder="Телефон"/>
                            <input type="text" placeholder="Повідомлення"/>
                            <button>Надіслати</button>
                        </form>
                    </div>

                    <div className={style.right}>
                        <div className={style.top}>
                            або
                            <h5>Подзвоніть/напишіть нам</h5>
                        </div>
                        <div className={style.bottom}>
                            <a href="mailto:itstart@gmail.com">ITSTART@GMAIL.COM</a>
                            <a href="tel:+380972025850">+380 (97) 202-58-50</a>
                            <p>Команда ItStart</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contacts;