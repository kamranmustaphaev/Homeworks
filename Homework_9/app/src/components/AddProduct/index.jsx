import { useContext } from 'react';
import s from './style.module.css'
import context from '../../context';

export default function AddProduct() {
    const {add_product} = useContext(context)
    const createProduct = event => {
        event.preventDefault()
        const {title,price} = event.target;
        const newProduct = {
        id: Date.now(),
        title: title.value,
        price: price.value
    }
        add_product(newProduct)
        console.log(newProduct);
        event.target.reset()  
    }

  return (
    <form className={s.form_product} onSubmit={createProduct}>
        <input className={s.input} type="text"  placeholder='Название' name='title'/>
        <input className={s.input} type="number" placeholder='Цена' name='price'/>
        <button className={s.add_product} >Добавить</button>
    </form>
  )
}
