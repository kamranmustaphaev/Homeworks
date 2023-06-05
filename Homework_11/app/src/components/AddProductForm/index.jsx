import React from 'react'
import { useDispatch } from 'react-redux';
import { addProductAction } from '../../store/reducers/productReducer';
import s from './style.module.css'


export default function AddProductForm() {
    const dispatch = useDispatch()
    const addProudct = e => {
        e.preventDefault()
        const {title,price} = e.target;
        const new_product = {title: title.value,price: price.value}
        dispatch(addProductAction(new_product))
        e.target.reset()
    }
  return (
    <form onSubmit={addProudct} className={s.product_form}>
        <input type="text" placeholder='Название' name='title'/>
        <input type="number" placeholder='Цена' name='price'/>
        <button>Добавить</button>
    </form>
  )
}
