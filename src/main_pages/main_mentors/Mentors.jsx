import React, {useCallback, useState} from "react";
import style from "./Mentors.module.scss";
import BlockTitle from "../../components/title/BlockTitle";

import one from "../../assets/images/1.svg";
import two from "../../assets/images/2.svg";
import three from "../../assets/images/3.svg";


export function Mentors() {

    return (
        <section id={'main_mentors'} className={style.mainBlock}>
            <div className={style.titleWrapper}>
                <BlockTitle/>
            </div>

            <div className={style.mainBlockCont}>
                <div>
                    <p className={style.p}>
                        пройшли багато співбесід, зробили безліч помилок за вас, про які їх ніхто не попереджав, тому
                        тепер
                        точно знають:
                    </p>
                </div>

                <div className={style.blocksCont}>
                    <div>
                        <p>які навики найбільше цінуються на компаніях.</p>
                        <span>На жаль, про них майже ніхто не розказує, тому це буде наш маленький секрет, якщо ви звісно пообіцяєте тримати його в таємниці  </span>
                        {/*<img src={one} alt=""/>*/}
                    </div>
                    <div>
                        <p>на чому більше потрібно акцентувати увагу,
                            а що можна пройти доволі поверхнево</p>
                        {/*<img src={two} alt=""/>*/}
                    </div>
                    <div>
                        <p>які навики найбільше цінуються на компаніях.</p>
                        {/*<img src={three} alt=""/>*/}
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Mentors;