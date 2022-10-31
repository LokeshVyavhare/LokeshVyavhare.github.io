import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate, NavLink } from "react-router-dom";
import { AUTH_SIGN_OUT } from "../../store/auth/auth.types";
import './Navbar.css'
const Navbar = () => {
  const isAuth = useSelector(store=>store.auth.data.isAuthenticated);
  const count = useSelector(store=>store.cart.data.length);
  const dispatch = useDispatch();
  const navigator = useNavigate()

  const handle_log = () => {
    console.log('handler', isAuth)
    if(isAuth){
      dispatch({type:AUTH_SIGN_OUT})
    }else{
      navigator('/login')
    }
  }

  return (
    <div data-cy="navbar"  className="flex1">
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <NavLink data-cy="navbar-home-link" to='/'>Home</NavLink>
      </div>
      <div className="flex2">
        <div data-cy="navbar-cart-items-count">Cart:{count}</div>
        <button data-cy="navbar-login-logout-button" onClick={handle_log}>{isAuth?'Logout':"Login"}</button>
      </div>
    </div>
  );
};

export default Navbar;
