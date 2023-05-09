import React, { useContext } from 'react'
import s from './style.module.css'
import context from '../../context'

export default function Product({id,title,price}) {
  const {deleteProduct} = useContext(context)
  return (
    <div className={s.product}>
        <p>{title}</p>
        <p>{price}</p>
        <button onClick={() => deleteProduct(id)} className={s.dlt}>X</button>
    </div>
  )
}
