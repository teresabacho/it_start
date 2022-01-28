import React, {useCallback, useState} from "react";
import style from "./SideMenu.module.scss";
import BlockTitle from "../title/BlockTitle";

import applyPerson from "../../assets/images/applyPerson.svg";


export function SideMenu() {
    return (
        <div className={style.sideMenu}>
            <nav>
                <ul>
                    <li>
                        <a href="#">Про курс</a>
                    </li>
                    <li>
                        <a href="#">Програма</a>
                    </li>
                    <li>
                        <a href="#">Карєра</a>
                    </li>
                    <li>
                        <a href="#" className={style.apply}>Записатися</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SideMenu;