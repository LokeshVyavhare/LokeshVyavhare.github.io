// Auth Actions here
import {AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS} from './auth.types'
import axios from 'axios'
import {useNavigate } from "react-router-dom";


export const AUTH_SIGN_IN = ({creds, nav}) => async (dispatch) => {
    dispatch({type: AUTH_SIGN_IN_LOADING});
    console.log(creds)
    
    try{
        let res = await axios.post("https://reqres.in/api/login", creds);
        dispatch({type: AUTH_SIGN_IN_SUCCESS, payload:res.data.token});
        nav();
    }catch(err){
        console.log(err)
        dispatch({type: AUTH_SIGN_IN_ERROR});
    }
    // console.log(creds)
}