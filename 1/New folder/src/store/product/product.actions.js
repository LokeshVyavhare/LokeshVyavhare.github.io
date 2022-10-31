// Product actions here
import {GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR}from './product.types'
import axios from 'axios'

// export const Get_products_loading = ()=>({type:GET_PRODUCTS_LOADING});
// export const Get_products_success = ()=>({type:GET_PRODUCTS_SUCCESS, payload:data});
// export const Get_products_error = ()=>({type:GET_PRODUCTS_ERROR});

export const GET_PRODUCTS = () =>async (dispatch) => {
    dispatch({type:GET_PRODUCTS_LOADING});
    try{
        let res =await axios.get("http://localhost:8080/products");
        let data = res.data;
        console.log(data, 'action');
        dispatch({type:GET_PRODUCTS_SUCCESS, payload: data});
    }catch(err){
        dispatch({type:GET_PRODUCTS_ERROR})
    }
    

}