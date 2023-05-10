const initialProducts = [
    {id: 1, title: 'Велосипед',quantity: 0,price: 40000},
    {id: 2, title: 'Самокат',quantity: 0,price: 15000},
    {id: 3, title: 'Лыжи',quantity: 0,price: 20000},
    {id: 4, title: 'Сноуборд',quantity: 0,price: 25000}
]
const ADD = 'ADD'
const DLT = 'DLT'
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
export const incrProduct = payload => ({type: INCREMENT, payload})
export const decrProduct = payload => ({type: DECREMENT, payload})
export const dltProduct = payload => ({type: DLT, payload})
export const addProduct = payload => ({type: ADD, payload}) 
export const productReducer = (state=initialProducts,action) => {
    if(action.type === ADD){
        return [...state,{id: Date.now(), ...action.payload}]
    }
    else if(action.type === DLT){
        return state.filter(el => el.id !== action.payload)
    }
    else if(action.type === INCREMENT){
       state.find(el => el.id === action.payload).quantity++
       return [...state]
    }
    else if(action.type === DECREMENT){
       const target_product = state.find(el => el.id === action.payload)
        if(target_product.quantity !== 0){
           target_product.quantity--
        }
        return [...state]
    }
   
    return state
}