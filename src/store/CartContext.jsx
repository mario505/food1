import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    // update state to add meal item
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id,
    );

    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }
  if (action.type === "REMOVE_ITEM") {
    // remove items from state
  }

  return state;
}

export function CartContextProvider({ children }) {
  useReducer(cartReducer, {
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
  });
  return <CartContext>{children}</CartContext>;
}

export default CartContext;
