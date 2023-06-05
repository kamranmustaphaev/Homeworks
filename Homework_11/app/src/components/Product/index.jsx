import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { dltProductAction } from '../../store/reducers/productReducer'

export default function Product({id,title,price}) {
    const dispatch = useDispatch()
  return (
    <div className={s.product}>
        <p>{title}</p>
        <p>{price}</p>
        <button onClick={() => dispatch(dltProductAction(id))}>X</button>
    </div>
  )
}
