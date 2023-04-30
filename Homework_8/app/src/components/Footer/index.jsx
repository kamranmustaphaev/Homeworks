import React from 'react'
import vk from '../image/Vector.png'
import youtube from '../image/youtube.png'
import facebook from '../image/facebook.png'
import instagram from '../image/instagram.png'
import s from './style.module.css'
export default function Footer() {
  return (
   <footer className={s.footer}>
           <img src={vk} alt="vk" />
           <img src={youtube} alt="youtube" />
           <img src={facebook} alt="facebook" />
           <img src={instagram} alt="instagram" />
   </footer>
  )
}
