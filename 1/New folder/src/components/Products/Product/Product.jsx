import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Product.css'

import {
  addItemToCart,
  removeItemFromCart,
  updateCartItem,
  
} from "../../../store/cart/cart.actions";

const Product = ({ data }) => {
  const { id, name, description } = data;
  const dispatch = useDispatch()
  let cardItem = useSelector(store=>store.cart.data.filter((i)=>i.id===id)[0]);
  const updateStatus = useSelector(store=>store.cart.updateCartItem);
  const addStatus = useSelector(store=>store.cart.addCartItem);

  const addToCart = () => {
    dispatch(addItemToCart({...data, count:1}));
  }

  const decItem = () =>{
    if(cardItem.count>1){
      dispatch(updateCartItem({id, newCount:cardItem.count-1}));
    }else{
      dispatch(removeItemFromCart(id));
    }
  }


  return (
    <div data-cy={`product-${id}`} className={'box'}>
      <h3 data-cy="product-name">{name}</h3>
      <h6 data-cy="product-description">{description}</h6>
      {!cardItem?<button data-cy="product-add-item-to-cart-button" onClick={()=>{addToCart()}}  >{addStatus.loading?'loading...':'Add To Cart'}</button>:
      
      <div>

        <button data-cy="product-increment-cart-item-count-button"  onClick={()=>{ decItem() }} >-</button>


        <span data-cy="product-count">{cardItem?cardItem.count:0}</span>


        <button data-cy="product-decrement-cart-item-count-button"
        disabled={cardItem.count>=10 }
        onClick={()=>{
          dispatch(updateCartItem({id, newCount:cardItem.count+1}))
        }}
        >+</button>
        <button data-cy="product-remove-cart-item-button"
        disabled={!cardItem}
        onClick={()=>{
          dispatch(removeItemFromCart(id))
        }}>Remove</button>
      </div>}
    </div>
  );
};

export default Product;
