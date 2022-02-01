import React, {useCallback, useState} from "react";
import style from "./Home.module.scss";
import CourseButton from "../../components/course_button/CourseButton";

import wormImg from "../../assets/images/compleatedWorm.svg"


export function Home() {

    return (
            <section id={'main_home'} className={style.mainBlock}>

                <div className={style.mainBlockCont}>

                    <div className={style.titleBox}>
                        <div className={style.title}>
                            <div className={style.it}>
                                <svg width="105" height="160" viewBox="0 0 105 160" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5 2.5H2.5V5V69.2857V71.7857H5H18.5714H21.0714V69.2857V50.3571H83.9286V69.2857V71.7857H86.4286H100H102.5V69.2857V5V2.5H100H86.4286H83.9286V5V23.9286H21.0714V5V2.5H18.5714H5ZM5 109.643H2.5V112.143V133.571V136.071H5H83.9286V155V157.5H86.4286H100H102.5V155V90.7143V88.2143H100H86.4286H83.9286V90.7143V109.643H5Z"
                                        fill="white" stroke="#262626" strokeWidth="5"/>
                                </svg>
                            </div>
                            <div className={style.start}>
                                <svg width="566" height="160" viewBox="0 0 566 160" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.7564 155V157.5H19.2564H90.5385H93.0385V155V136.071H104.795H107.295V133.571V90.7143V88.2143H104.795H93.0385V69.2857V66.7857H90.5385H36.0128V28.9286H73.7821V47.8571V50.3571H76.2821H104.795H107.295V47.8571V26.4286V23.9286H104.795H93.0385V5V2.5H90.5385H19.2564H16.7564V5V23.9286H5H2.5V26.4286V69.2857V71.7857H5H16.7564V90.7143V93.2143H19.2564H73.7821V131.071H36.0128V112.143V109.643H33.5128H5H2.5V112.143V133.571V136.071H5H16.7564V155ZM159.321 155V157.5H161.821H190.333H192.833V155V71.7857H218.846H221.346V69.2857V47.8571V45.3571H218.846H192.833V5V2.5H190.333H161.821H159.321V5V45.3571H133.308H130.808V47.8571V69.2857V71.7857H133.308H159.321V155ZM244.859 155V157.5H247.359H332.897H335.397V155V69.2857V66.7857H332.897H321.141V47.8571V45.3571H318.641H247.359H244.859V47.8571V69.2857V71.7857H247.359H301.885V88.2143H247.359H244.859V90.7143V109.643H233.103H230.603V112.143V133.571V136.071H233.103H244.859V155ZM404.18 93.2143H406.68V90.7143V71.7857H446.949H449.449V69.2857V47.8571V45.3571H446.949H404.18H401.68V47.8571V66.7857H392.423V47.8571V45.3571H389.923H361.41H358.91V47.8571V155V157.5H361.41H389.923H392.423V155V93.2143H404.18ZM501.474 155V157.5H503.974H532.487H534.987V155V71.7857H561H563.5V69.2857V47.8571V45.3571H561H534.987V5V2.5H532.487H503.974H501.474V5V45.3571H475.462H472.962V47.8571V69.2857V71.7857H475.462H501.474V155ZM301.885 114.643V131.071H264.115V114.643H301.885Z"
                                        fill="white" stroke="#262626" strokeWidth="5"/>
                                </svg>
                            </div>
                        </div>

                        <h1>
                            - розпочни свою карєру в IT <br/> разом з нами
                        </h1>

                        <div className={style.btn}>
                            <CourseButton/>
                        </div>
                    </div>


                    <div className={style.imgCont}>
                        <img src={wormImg} alt=""/>
                    </div>
                </div>
            </section>
    )
}

export default Home;