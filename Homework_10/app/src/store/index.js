import {createStore} from 'redux'
import {productReducer} from './reduser/productReducer.js'
export const store = createStore(productReducer)