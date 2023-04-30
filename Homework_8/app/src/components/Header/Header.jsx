import React from 'react'
import s from './Header.module.css'
import Top from '../image/top.webp'

export default function Header() {
  return (
    <div className={s.header}>
        <div className={s.nav}>
            <ul>Довоенные</ul>
            <ul>Классика</ul>
            <ul>Премиум</ul>
            <ul>Гонночные</ul>
            <ul>Контакты</ul>
            <button className={s.nav_button}>Связаться</button>
        </div>
        <div className={s.menu}>
            <div className={s.descr}>
                <h1>Автомобили</h1>
                <p>Современные технологии и материалы для реставрации позволяют воссоздать старинный автомобиль в первозданном виде, при этом сохранив его полную аутентичность, вплоть до мелочей. Но особо ценятся автомобили,
                     сохранившиеся в своём первозданном виде.</p>
                <button className={s.menu_button}>ПОДРОБНЕЕ</button>
            </div>
                <img src={Top} alt="Top" className={s.auto}/>
        </div>
    </div>
  )
}
