import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



const RequiredAuth = ({ children }) => {
  const isAuthenticated = useSelector(store=>store.auth.data.isAuthenticated);
  const navigator = useNavigate();



    useEffect(()=>{
    console.log(isAuthenticated, children)
    if(!isAuthenticated){
      navigator('/login');
    }
  }, [isAuthenticated]);

  return children

};

export default RequiredAuth;

