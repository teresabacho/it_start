import React, {useCallback, useState} from "react";
import style from "./CourseAbout.module.scss";
import BlockTitle from "../../components/title/BlockTitle";

export function CourseAbout() {
    return (
        <section id={'course_about'} className={style.mainBlock}>
            <div className={style.titleWrapper}>
                <BlockTitle/>
            </div>

            <div className={style.mainBlockCont}>
                <div>
                    <p>
                        Мета цього курсу - якомога швидше познайомити вас із мовою Рython, щоб ви могли писати на основі
                        цієї мови реальні програми: ігри, візуалізаціiї даних, вебсайти. Й щоб ви одночасно вибудовали
                        міцне
                        підгрунтя у програмуванні загалом, яке стане вам у пригоді впродовж всього життя.
                    </p>
                    <p>
                        Наша команда писала цей курс для людей будь-якого віку, які ніколи не програмували на Руthon або
                        взагалі не програмували. Цей курс знадобиться тим, хто хоче швидко засвоїти ази кодування, щоб
                        зосередитися на цікавих проектах, а також для тих, хто любить перевіряти себе та свое розуміння
                        нових концепцій, розв'язуючи змістовні задачі. Або ж якщо ви вивчаєте Python в університеті, але
                        рекомендована література до курсу занадто складна, а на парах ви виконуєте тільки найлегші
                        задачі,
                        тоді наш курс може значно полегшити вам життя.
                    </p>
                    <p>
                        Чого ви навчитеся? Ми маємо на меті зробити з вас хорошого програміста загалом та хорошого
                        програміста Руthon зокрема. Завдяки ефективному навчанню ви отримаєте грунтовне розуміння
                        базових
                        концепцій кодування та набудете корисних навиків. Опанувавши курс, ви будете готові до більш
                        просунутих прийомів Рython та вивчення іншої мови програмування.
                    </p>
                    <p>
                        У першій частині викладено основи, які знадобляться вам для того, щоб писати програми на Рython.
                        Ці
                        концепції вчать майже всі початківці, незалежно від вибору мови програмування.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default CourseAbout;