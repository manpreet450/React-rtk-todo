import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import CartIcon from '../assets/cart-icon.svg'
import heartIcon from '../assets/heart-icon.svg'
import { useDispatch, useSelector } from 'react-redux'
import {  fetchProductsData} from '../store/slices/productsSlice'
import { createSlice } from '@reduxjs/toolkit'
// import { productsList } from '../store/productsList'

import {  fetchCartItemsData } from '../store/slices/cartSlice'


export default function Header() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchProductsData())
    dispatch(fetchCartItemsData ())
},[])
 const cartItems = useSelector((state) => state.cartItems.list)
  // console.log(cartItems)
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="header-icon cart-icon" to="/cart">
         <img src={heartIcon}  alt="heart-icon" className='icon' />
          <img src={CartIcon} alt="cart-icon"className='icon'/>
          <div className="cart-items-count">
            {cartItems.reduce(
              (accumulator, currentItem) => accumulator + currentItem.quantity,
              0
            )}
          </div>
        </Link>
      </div>
    </header>
  )
}