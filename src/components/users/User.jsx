import React from 'react';
import style from "./users.module.css";

function User(props) {
    const obj = [
        {
            id: 1,
            name: "Кудузов Ахмад",
            message: "Приходите сегодня ...",
            time: "9:00"
        },
        {
            id: 2,
            name: "Цугаев Альви",
            message: "поставлю всем двой...",
            time: "9:00"
        },
        {
            id: 3,
            name: "Курсы Intocode",
            message: "Идет новый набор н...",
            time: "9:00"
        },
        {
            id: 4,
            name: "Борис Гордеев",
            message: "Хочу записаться на...",
            time: "9:00"
        },{
            id: 5,
            name: "Налоговая",
            message: "Пожалуйста сдайте...",
            time: "9:00"
        },{
            id: 6,
            name: "Макаев Мухаммад",
            message: "Как скачать рефера...",
            time: "9:00"
        },
        {
            id: 7,
            name: "Адам Решало",
            message: "Го пить кофе? ...",
            time: "9:00"
        },
        {
            id: 8,
            name: "Студент",
            message: "Верните мои д...",
            time: "9:00"
        },{
            id: 5,
            name: "Налоговая",
            message: "Пожалуйста сдайте...",
            time: "9:00"
        },{
            id: 6,
            name: "Макаев Мухаммад",
            message: "Как скачать рефера...",
            time: "9:00"
        },
        {
            id: 7,
            name: "Адам Решало",
            message: "Го пить кофе? ...",
            time: "9:00"
        },
        {
            id: 8,
            name: "Студент",
            message: "Верните мои д...",
            time: "9:00"
        }
    ];

    return (
        <div className={style.users}>
            {obj.map(item => {
                return <div className={style.user}>
                    <div className={style.favicon}>
                        {item.name.substr(0, 1)}
                    </div>
                    <div className={style.info}>
                        <div className={style.name}>
                            {item.name}
                        </div>
                        <div className={style.message}>
                            {item.message}
                        </div>
                    </div>
                    <div className={style.date}>
                        {item.time}
                    </div>
                    <div className={style.online}>

                    </div>
                </div>
            })}
        </div>
    )
}

export default User;