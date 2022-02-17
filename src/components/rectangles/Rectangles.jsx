import React, {useCallback, useState} from "react";
import style from "./Rectangles.module.scss";


export function Rectangles() {

    return (
        <div>

            <div className={style.desktopRect}>
                {/*viewBox="0 0 100% 200"*/}
                <svg width="100%" height="200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="130" width="100%" height="80" fill="white"/>

                    <rect x="0" y="76" width="16%" height="134" fill="white"/>
                    <rect x="15%" y="28" width="23%" height="182" fill="white"/>
                    <rect x="37%" y="91" width="25%" height="119" fill="white"/>
                    <rect x="61%" width="12%" height="200" fill="white"/>
                    <rect x="72%" y="76" width="14%" height="134" fill="white"/>
                    <rect x="85%" y="28" width="12%" height="232" fill="white"/>
                </svg>
            </div>

            <div className={style.mobileRect}>
                <svg width="100%" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="130" width="100%" height="40" fill="white"/>
                    <rect x="0" y="76" width="36%" height="80" fill="white"/>
                    <rect x="34%" y="38" width="26%" height="82" fill="white"/>
                    <rect x="58%" y="91" width="25%" height="109" fill="white"/>
                    <rect x="76%" y="70" width="32%" height="70" fill="white"/>
                </svg>
            </div>

        </div>
    )
}

export default Rectangles;