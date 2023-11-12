import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cart: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(pizza => pizza.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find(pizza => pizza.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find(pizza => pizza.pizzaId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if(item.quantity === 0) {
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    clearCart(state) {
      state.cart = [];
    }
  }
});

export default cartSlice.reducer;
export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;

export const getCart = state => state.cart.cart;
export const getTotalPizzas = state => state.cart.cart.reduce((acc, pizza) => acc + pizza.quantity, 0);
export const getTotalPrice = state => state.cart.cart.reduce((acc, pizza) => acc + pizza.totalPrice, 0);
export const getCurrentQuantityById = id => state => state.cart.cart.find(pizza => pizza.pizzaId === id)?.quantity ?? 0;
