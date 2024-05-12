import React from 'react';
import './Cart.css';
import { useSelector } from 'react-redux';
import CardItem from './CardItem/CardItem';

const Cart = () => {
  const carts =useSelector(item =>item.card.value )
  console.log(carts);
    return (
       <>
        <CardItem data={carts}/>
      
       
       </>
    );
}

export default Cart;

