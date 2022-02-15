import React, {useCallback, useState} from "react";
import style from "./CourseHome.module.scss";
import CourseButton from "../../components/course_button/CourseButton";

// import stepsImg from "../../assets/images/whiteSteps.svg";
import personCourse from "../../assets/images/personCourse.svg";


export function CourseHome() {
    return (
        <section id={'course_home'} className={style.mainBlock}>
            <div className={style.stepsWrapper}>


                <svg width="100%" height="100vh"  fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="90vh" width="100%" height="10vh" fill="white"/>
                    <rect x="14%" y="76vh" width="24%" height="15vh" fill="white"/>
                    <rect x="37%" y="60vh" width="39%" height="32vh" fill="white"/>
                    <rect x="50%" y="32vh" width="13%" height="58vh" fill="white"/>
                    <rect x="60%" y="20vh" width="23%" height="75vh" fill="white"/>
                    <rect x="82%" y="100px" width="18%" height="100vh" fill="white"/>
                </svg>


                {/*<svg width="100%" height="100vh"  fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                {/*    <rect y="90vh" width="100%" height="10vh" fill="white"/>*/}
                {/*    <rect x="14%" y="76vh" width="24%" height="15vh" fill="white"/>*/}
                {/*    <rect x="37%" y="60vh" width="39%" height="32vh" fill="white"/>*/}
                {/*    <rect x="50%" y="32vh" width="13%" height="58vh" fill="white"/>*/}
                {/*    <rect x="60%" y="20vh" width="23%" height="75vh" fill="white"/>*/}
                {/*    <rect x="82%" y="100px" width="18%" height="100vh" fill="white"/>*/}
                {/*</svg>*/}



                <div className={style.mainBlockCont}>
                    <div className={style.titleBlock}>
                        <div>
                            <h3>стань повноцінним</h3>
                            <h1>Python Developer</h1>
                        </div>
                        <CourseButton/>
                    </div>
                    <div className={style.imgBlock}>
                        <img src={personCourse} alt="person image"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CourseHome;