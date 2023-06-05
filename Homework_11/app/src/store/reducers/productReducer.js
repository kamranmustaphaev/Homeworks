const initialState = [
    {id: 1,title: 'Велосипед',price: 40000},
    {id: 2,title: 'Самокат',price: 15000},
    {id: 3,title: 'Лыжи',price: 20000},
    {id: 4,title: 'Сноуборд',price: 25000}
]

const ADD_PRODUCT = '[Product] ADD_PRODUCT'
const DLT_PRODUCT = '[Product] DLT_PRODUCT'

export const addProductAction = payload => ({type: ADD_PRODUCT,payload})
export const dltProductAction = payload => ({type: DLT_PRODUCT,payload})

export const productReducer = (state=initialState,action) => {
    if(action.type === ADD_PRODUCT){
        return [...state, {id: Date.now(), ...action.payload}]
    }
    else if(action.type === DLT_PRODUCT){
        return state.filter(el => el.id !== action.payload)
    }
    return state
}