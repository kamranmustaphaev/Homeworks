
import { useState } from 'react';
import Context from '../../context';
import AddProduct from '../AddProduct';
import ProductsContainer from '../ProductsContainer';
import './App.css';

function App() {
  
  const productsDefault = [
    {id: 1, title: 'Велосипед', price: 40000},
    {id: 2, title: 'Самокат', price: 15000},
    {id: 3, title: 'Лыжи', price: 20000},
    {id: 4, title: 'Сноуборд', price: 25000}
]
const [products,setProduct] = useState(productsDefault)
const deleteProduct = id => setProduct(products.filter(el => el.id !== id))
const add_product = product =>  setProduct([...products,product])

  return (
    <div>
      <Context.Provider value={{products,deleteProduct,add_product}}>
      <AddProduct/>
      <ProductsContainer/>
      </Context.Provider>
    </div>
  );
}

export default App;
