// src/CartContext.js
import React, { createContext, useReducer } from 'react';

export const CartContext = createContext();

const initialState = {
  cart: []
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.product]
      };
    default:
      return state;
  }
};

const addToCart = (dispatch, product) => {
  dispatch({ type: 'ADD_TO_CART', product });
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart: state.cart, addToCart: (product) => addToCart(dispatch, product) }}>
      {children}
    </CartContext.Provider>
  );
};
