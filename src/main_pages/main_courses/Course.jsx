import React, {useCallback, useState} from "react";
import Fade from 'react-reveal/Fade';
import style from "./Course.module.scss";
import BlockTitle from "../../components/title/BlockTitle";
import CourseButton from "../../components/course_button/CourseButton";


export function Course() {
    return (
        <section id={'main_courses'} className={style.mainBlock}>
            <div className={style.titleWrapper}>
                <BlockTitle/>
            </div>

            <div className={style.mainBlockCont}>

                <Fade left>
                    <a href="#">
                        <div className={style.flex}>
                            <div className={style.top}>
                                <span className={style.course}>Курс</span>
                                <span className={style.method}>віддалено</span>
                            </div>

                            <div className={style.middle}>
                                <h4>C++ developer</h4>
                            </div>

                            <div className={style.bottom}>
                                <span className={style.time}>3 місяці</span>
                                <span className={style.startEnd}>12 грудня - 12 березня</span>
                            </div>
                        </div>
                    </a>
                </Fade>

                <Fade left delay={300}>
                <a href="#">
                    <div className={style.flex}>
                        <div className={style.top}>
                            <span className={style.course}>Курс</span>
                            <span className={style.method}>віддалено</span>
                        </div>

                        <div className={style.middle}>
                            <h4>C++ developer</h4>
                        </div>

                        <div className={style.bottom}>
                            <span className={style.time}>4 місяці</span>
                            <span className={style.startEnd}>12 грудня - 12 березня</span>
                        </div>
                    </div>
                </a>
                </Fade>

                <Fade left delay={400}>
                <a href="#">
                    <div className={style.flex}>
                        <div className={style.top}>
                            <span className={style.course}>Курс</span>
                            <span className={style.method}>віддалено</span>
                        </div>

                        <div className={style.middle}>
                            <h4>Golang developer</h4>
                        </div>

                        <div className={style.bottom}>
                            <span className={style.time}>6 місяців</span>
                            <span className={style.startEnd}>12 грудня - 12 березня</span>
                        </div>
                    </div>
                </a>
                </Fade>

            </div>

        </section>
    )
}

export default Course;