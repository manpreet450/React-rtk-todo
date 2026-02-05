import React from 'react'

import CartItem from '../components/CartItem'
import '../App.css'
import { useSelector } from 'react-redux'
import { getAllCartItems,getCartLoadingState,getCartError } from '../store/slices/cartSlice'

export default function Cart() {
 

 const cartItems = useSelector(getAllCartItems)
  const isLoading = useSelector(getCartLoadingState)
  const error = useSelector(getCartError)
  const grandTotal=cartItems.length?cartItems.reduce((sum,item)=>sum+item.price*item.quantity,0):0;
  
  return (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {isLoading ? (
          <h1 style={{ textAlign: 'center' }}>Loading...</h1>
        ) : error ? (
          <h2 style={{ textAlign: 'center' }}>{error}</h2>
        ) : (
         cartItems.map(({ id, title, rating, price, image, quantity })  => (
          <CartItem
            key={id}
            productId={id}
            title={title}
            price={price}
            quantity={quantity}
            imageUrl={image}
            rating={rating.rate}
          />
        )))}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
         
             
          <div className="Total">$  {grandTotal.toFixed(2)}</div>
              
        </div>
      </div>
    </div>
  )
}