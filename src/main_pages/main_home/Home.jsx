import React, {useCallback, useState} from "react";
import style from "./Home.module.scss";
import CourseButton from "../../components/course_button/CourseButton";

import wormImg from "../../assets/images/compleatedWorm.svg";
import it from "../../assets/images/IT.svg";
import start from "../../assets/images/Start.svg";
import itStart from "../../assets/images/itStart.svg";


export function Home() {
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    console.log(screenWidth)

    return (
        <section id={'main_home'} className={style.mainBlock}>
            <div className={style.mainBlockCont}>
                <div className={style.titleBox}>
                    {/*<img src={it} alt=""/>*/}
                    {/*<img src={start} className={style.start} alt=""/>*/}
                    <img src={itStart} alt=""/>
                    <h1>розпочни свою карєру в IT разом з нами</h1>

                    <div className={style.btn}>
                        <CourseButton/>
                    </div>
                </div>


                <div className={style.imgCont}>
                    <img src={wormImg} alt=""/>
                </div>


                <div className={style.btnForSm}>
                    <CourseButton/>
                </div>

            </div>
        </section>
    )
}

export default Home;