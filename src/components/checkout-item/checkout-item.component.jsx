import "./checkout-item.style.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { removeItemFromCart } = useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name"> {name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>

      <div
        className="remove-button"
        onClick={() => {
          removeItemFromCart(cartItem);
        }}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
