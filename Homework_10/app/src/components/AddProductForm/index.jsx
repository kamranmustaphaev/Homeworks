import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../store/reduser/productReducer'

export default function AddProductForm() {
    const dispatch = useDispatch()
    const submit = e => {
        e.preventDefault();
        const {title,price} = e.target;
        const new_product = {
            title: title.value,
            price: price.value,
            quantity: 0
        }
        dispatch(addProduct(new_product))
        e.target.reset()
    }
  return (
    <form className={s.form} onSubmit={submit}>
        <input type="text" placeholder='Название' name='title'/>
        <input type="number" placeholder='Цена' name='price'/>
        <button className={s.btn}>Добавить</button>
    </form>
  )
}
