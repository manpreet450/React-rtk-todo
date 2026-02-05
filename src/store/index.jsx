import {  combineReducers } from "redux";
import productsReducer from './slices/productsSlice'

import { logger } from "./middleware/logger";


import cartReducer, {
  addCartItem,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
} from "./slices/cartSlice"
import wishListReducer, {
  addWishListItem,
  removeWishListItem,
} from "./slices/wishListSlice";
import { configureStore } from "@reduxjs/toolkit";
import { func } from "./middleware/func";




export const store = configureStore({
  reducer:{
 products: productsReducer,
cartItems: cartReducer,
wishList: wishListReducer,},
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger).concat(func),
});




export default store;
