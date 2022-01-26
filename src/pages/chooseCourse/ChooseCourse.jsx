import React, {useCallback, useState} from "react";
import style from "./ChooseCourse.module.scss";
import BlockTitle from "../../components/blockTitle/BlockTitle";
import CourseButton from "../../components/courseButton/CourseButton";


export function ChooseCourse() {
    return (
        <div className={style.mainBlock}>
            <div className={style.titleWrapper}>
                <BlockTitle/>
            </div>

            <div className={style.mainBlockCont}>
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

            </div>

        </div>
    )
}

export default ChooseCourse;