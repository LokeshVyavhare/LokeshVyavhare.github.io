import React from "react";
import { useEffect } from "react";
import {GET_PRODUCTS} from '../../store/product/product.actions'
import { useDispatch,useSelector } from "react-redux";
import Product from './Product/Product'
import { getCartItems } from "../../store/cart/cart.actions";
import './Products.css'

const Products = () => {
  const dispatch = useDispatch();
  const productsData = useSelector(store=>store.product.data)

  useEffect(()=>{
    dispatch(GET_PRODUCTS());
    dispatch(getCartItems());
  }, [])


  return <div style={{border:"1px solid red"}}>
            Products
    <div>
      <div className="grid">
        {productsData.map((i)=><Product key={i.id+'products'} data={i}/>)}
      </div>
    </div>
  </div>;
};

export default Products;
