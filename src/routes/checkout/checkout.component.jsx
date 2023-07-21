import { useState, useContext, useEffect } from "react";

import { CartContext } from "../../context/cart.context";

import "./checkout.style.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const [sum, setSum] = useState(0);
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const headerContent = [
    {
      header: "Product",
    },
    {
      header: "Description",
    },
    {
      header: "Quantity",
    },
    {
      header: "Price",
    },
    {
      header: "Remove",
    },
  ];

  const getQuantitySum = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.quantity * item.price;
    });
    setSum(total);
  };

  useEffect(() => {
    getQuantitySum();
  }, [cartItems]);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        {headerContent.map((content, index) => {
          return (
            <div key={index} className="header-block">
              <span>{content.header}</span>
            </div>
          );
        })}
      </div>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} cartItem={item}></CheckoutItem>;
      })}
      <span className="total">Total: {sum}</span>
    </div>
  );
};

export default Checkout;
