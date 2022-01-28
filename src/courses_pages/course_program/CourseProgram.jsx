import React, {useCallback, useState} from "react";
import style from "./CourseProgram.module.scss";
import BlockTitle from "../../components/title/BlockTitle";

import stop1 from "../../assets/images/stop1.svg";
import stop2 from "../../assets/images/stop2.svg";
import stop3 from "../../assets/images/stop3.svg";
import stop4 from "../../assets/images/stop4.svg";
import stop5 from "../../assets/images/stop5.svg";
import stop6 from "../../assets/images/stop6.svg";
import stop7 from "../../assets/images/stop7.svg";
import stop8 from "../../assets/images/stop8.svg";
import finish from "../../assets/images/finish.svg";




export function CourseProgram() {
    return (
        <section id={'course_program'} className={style.mainBlock}>
            <div className={style.titleWrapper}>
                <BlockTitle/>
            </div>

            <div className={style.mainBlockCont}>

                <div className={style.programBlock}>
                    <img src={stop1} alt="stop1" className={style.stop1}/>
                    <img src={stop2} alt="stop1" className={style.stop2}/>
                    <img src={stop3} alt="stop1" className={style.stop3}/>
                    <img src={stop4} alt="stop1" className={style.stop4}/>
                    <img src={stop5} alt="stop1" className={style.stop5}/>
                    <img src={stop6} alt="stop1" className={style.stop6}/>
                    <img src={stop7} alt="stop1" className={style.stop7}/>
                    <img src={stop8} alt="stop1" className={style.stop8}/>
                    <img src={finish} alt="stop1" className={style.finish}/>
                </div>

            </div>
        </section>
    )
}

export default CourseProgram;