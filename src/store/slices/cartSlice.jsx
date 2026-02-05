import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

const findItemIndex = (state, action) =>
  state.findIndex(
    (cartItem) => cartItem.productId === action.payload.productId,
  );

export const fetchCartItemsData = createAsyncThunk(
  "cart/fetchCartItems",
  async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/carts/5");
      return response.json();
    } catch (err) {
      throw err;
    }
  },
);

const slice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    list: [],
    error: "",
  },
  reducers: {
    addCartItem(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      if (existingItemIndex !== -1) state.list[existingItemIndex].quantity += 1;
      else state.list.push({ ...action.payload, quantity: 1 });
    },
    removeCartItem(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      state.list.splice(existingItemIndex, 1);
    },
    increaseCartItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      state.list[existingItemIndex].quantity += 1;
    },
    decreaseCartItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      state.list[existingItemIndex].quantity -= 1;
      if (state.list[existingItemIndex].quantity === 0)
        state.list.splice(existingItemIndex, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItemsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCartItemsData.fulfilled, (state, action) => {
        ((state.loading = false), (state.list = action.payload.products));
      })
      .addCase(fetchCartItemsData.rejected, (state, payload) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});


export const {
  addCartItem,
  removeCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} = slice.actions;

const selectProducts = (state) => state.products.list;
const selectCartItemsRaw = (state) => state.cartItems.list;

export const getAllCartItems = createSelector(
  [selectProducts, selectCartItemsRaw],
  (products, cartItems) => {
    return cartItems
      .map(({ productId, quantity }) => {
        const cartProduct = products.find((p) => p.id === productId);
        return cartProduct ? { ...cartProduct, quantity } : null;
      })
      .filter(Boolean);
  },
);


export const getCartLoadingState = (state) => state.cartItems.loading;
export const getCartError = (state) => state.cartItems.error;

export default slice.reducer;
