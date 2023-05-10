import React from 'react'
import s from './style.module.css'
import { useSelector } from 'react-redux'
import Product from '../Product'

export default function ProductContainer() {
    const products = useSelector(state => state)
  return (
    <div className={s.container}>
        {products.map(el => <Product key={el.id} {...el} />)}
    </div>
  )
}
