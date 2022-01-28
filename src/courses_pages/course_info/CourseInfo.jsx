import React, {useCallback, useState} from "react";
import style from "./CourseInfo.module.scss";


export function CourseInfo() {
    return (
        <section id={'course_info'} className={style.mainBlock}>
            <div className={style.mainBlockCont}>
                <div className={style.price}>
                    <div>2000UAH</div>
                    <p>
                        за <span>2</span> місяці навчання
                    </p>
                </div>
                <div className={style.start}>
                    <p>Старт</p>
                    <div>12 лютого</div>
                </div>
                <div className={style.places}>
                    <div>20/20</div>
                    <p>вільних місць</p>
                </div>
            </div>
        </section>
    )
}

export default CourseInfo;