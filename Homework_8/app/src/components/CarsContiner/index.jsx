
import Cars from '../Cars'
import { cars } from '../../cars'
import React, { useState } from 'react'
import s from './style.module.css'

export default function CarsContainer() {
    const [card,setCard] = useState(cars)
  return (
    <div className={s.container}>
        {card.map(el => <Cars key={el.id} {...el} />)}
    </div>
  )
}
