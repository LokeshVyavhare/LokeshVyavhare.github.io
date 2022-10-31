import React from "react";
import { useRef } from "react";
import { AUTH_SIGN_IN } from "../store/auth/auth.actions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const inpEmail = useRef(null);
  const inpPass = useRef(null);

  const isAuthenticated = useSelector(store=>store.auth.isAuthenticated);
  const navigator = useNavigate();
  const dispatch = useDispatch()
  const nav = () =>{
    navigator('/');
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={async(e)=>{
        e.preventDefault();
        const creds = {
            email:inpEmail.current.value,
            password: inpPass.current.value
        }
       dispatch(AUTH_SIGN_IN({creds, nav}));
       
       
      }}>
        <input data-cy="login-email" ref={inpEmail}/>
        <input data-cy="login-password" ref={inpPass} />
        <button data-cy="login-submit" type="submit">Login</button>
      </form>
      <div>
        <p>eve.holt@reqres.in <br/>"password": "cityslicka"</p>
      </div>
    </div>
  );
};

export default Login;
