import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { decrProduct, dltProduct, incrProduct } from '../../store/reduser/productReducer'

export default function Product({id,title,price,quantity}) {
    const dispatch = useDispatch()
  return (
    <div className={s.item}>
        <p>{title}</p>
        <p>{price}</p>
        <button className={s.dlt} onDoubleClick={() => dispatch(dltProduct(id))}>X</button>
        <div className={s.quantity}>
            <div className={s.flex}>
            <button onClick={() => dispatch(decrProduct(id))}>-</button>
            <p>{quantity}</p>
            <button onClick={() => dispatch(incrProduct(id))}>+</button>
            </div>
        </div>
    </div>
  )
}
