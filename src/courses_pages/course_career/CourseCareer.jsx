import React, {useCallback, useState} from "react";
import style from "./CourseCareer.module.scss";
import BlockTitle from "../../components/title/BlockTitle";

import itSteps from "../../assets/images/ItSteps.svg";


export function CourseCareer() {
    return (
        <section id={'course_career'} className={style.mainBlock}>
            <div className={style.titleWrapper}>
                <BlockTitle/>
            </div>

            <div className={style.mainBlockCont}>
                <span>Після курсу ти зможеш стати:</span>
                <img src={itSteps} alt="itSteps"/>
            </div>
        </section>
    )
}

export default CourseCareer;