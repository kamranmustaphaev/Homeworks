import s from './Cars.module.css'
import arrow from '../image/Arrow.png'
export default function Cars({img,title}) {
  
  return (
          <div className={s.item}>
            <img className={s.image} src={img}/>
            <div className={s.des}>
            <p>{title}</p>
            <img src={arrow} className={s.arrow}/>
            </div>
        </div>
  )
}
