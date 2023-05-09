import { useContext } from 'react'
import Product from '../Product'
import s from './style.module.css'
import context from '../../context'


export default function ProductsContainer() {
    const {products} = useContext(context)
  return (
    
    <div className={s.container}>
        {products.map(el => <Product key={el.id} {...el} />)}
    </div>
  )
}
