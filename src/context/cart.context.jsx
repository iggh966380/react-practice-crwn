import { createContext, useState } from "react";

const addCartItem = (cartItems, product) => {
  const productToAdd = {
    quantity: 1,
    ...product,
  };
  if (!cartItems.length) {
    cartItems.push(productToAdd);
  } else {
    const index = cartItems.findIndex((item) => {
      return item.id === productToAdd.id;
    });
    if (index === -1) {
      cartItems.push(productToAdd);
    } else {
      cartItems[index].quantity += 1;
    }
  }
  return cartItems.sort((a, b) => a.id - b.id);
};

const removeCartItem = (cartItems, product) => {
  const index = cartItems.findIndex((item) => {
    return item.id === product.id;
  });

  cartItems[index].quantity -= 1;
  if (cartItems[index].quantity < 1) {
    cartItems = cartItems.filter((item) => item.id !== product.id);
  }

  return cartItems;
};

const quantitySum = (cartItems) => {
  let sum = 0;
  cartItems.forEach((item) => (sum += item.quantity));
  return sum;
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  itemQuantities: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemQuantities, setItemQuantities] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
    setItemQuantities(quantitySum(cartItems));
  };

  const removeItemFromCart = (product) => {
    setCartItems(removeCartItem(cartItems, product));
    setItemQuantities(quantitySum(cartItems));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    itemQuantities,
    removeItemFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
