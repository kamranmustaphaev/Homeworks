import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../Product'
import s from './style.module.css'

export default function ProductContainer() {
    const products = useSelector(state => state.products)
  return (
    <div className={s.container}>
        {products.map(el => <Product key={el.id} {...el}/>)}
    </div>
  )
}
