// Cart Actions here
import {
    ADD_ITEM_TO_CART_ERROR,
    ADD_ITEM_TO_CART_LOADING,
    ADD_ITEM_TO_CART_SUCCESS,
    REMOVE_CART_ITEMS_ERROR,
    REMOVE_CART_ITEMS_LOADING,
    REMOVE_CART_ITEMS_SUCCESS,
    UPDATE_CART_ITEMS_ERROR,
    UPDATE_CART_ITEMS_LOADING,
    UPDATE_CART_ITEMS_SUCCESS,
    GET_CART_ITEMS_LOADING,
    GET_CART_ITEMS_ERROR,
    GET_CART_ITEMS_SUCCESS
} from './cart.types'
import axios from 'axios'

export const addItemToCart = (data) => async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_LOADING })

    try {
        let res = await axios.post("http://localhost:8080/cartItems", data)
        let res1 = res.data;
        console.log(res1)
        dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data })
    } catch (err) {
        dispatch({ type: ADD_ITEM_TO_CART_ERROR })
    }

}
export const removeItemFromCart = (id) => async (dispatch) => {
    dispatch({ type: REMOVE_CART_ITEMS_LOADING })

    try {
        let res = await axios.delete(`http://localhost:8080/cartItems/${id}`,)
        let res1 = res.data;
        dispatch({ type: REMOVE_CART_ITEMS_SUCCESS, payload: id })
    } catch (err) {
        dispatch({ type: REMOVE_CART_ITEMS_ERROR })
    }

}
export const updateCartItem = ({id, newCount}) => async (dispatch) => {
    dispatch({ type: UPDATE_CART_ITEMS_ERROR })

    try {
        let res = await axios.patch(`http://localhost:8080/cartItems/${id}`, {count:newCount})
        let res1 = res.data;
        dispatch({ type: UPDATE_CART_ITEMS_SUCCESS, payload: {id, newCount} })
    } catch (err) {
        dispatch({ type: UPDATE_CART_ITEMS_ERROR })
    }

}
export const getCartItems = (data) => async (dispatch) => {
    dispatch({ type: GET_CART_ITEMS_LOADING })

    try {
        let res = await axios.get("http://localhost:8080/cartItems")
        let res1 = res.data;
        dispatch({ type: GET_CART_ITEMS_SUCCESS, payload: res1 })
    } catch (err) {
        dispatch({ type: GET_CART_ITEMS_ERROR })
    }
}
