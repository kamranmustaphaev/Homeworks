import React from 'react'
import Logo from '../image/car-solid.svg'
import vk from '../image/Vector.png'
import youtube from '../image/youtube.png'
import facebook from '../image/facebook.png'
import instagram from '../image/instagram.png'
import s from '../Icons/Icon.module.css'
export default function Icon() {
  return (
    <div className={s.icons}>
       <img src={Logo} alt="Logo" className={s.logo}/>
        <ul className={s.ul_icons}>
           <img src={vk} alt="vk" />
           <img src={youtube} alt="youtube" />
           <img src={facebook} alt="facebook" />
           <img src={instagram} alt="instagram" />
        </ul>
    </div>
  )
}
