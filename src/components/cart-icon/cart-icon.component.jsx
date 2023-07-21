import {
  ShoppingSvg,
  CartIconContainer,
  ItemCount,
} from "./cart-icon.style.jsx";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, itemQuantities } = useContext(CartContext);

  const toggleCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer>
      <ShoppingSvg
        className="shopping-icon"
        onClick={toggleCartOpen}
      ></ShoppingSvg>
      <ItemCount onClick={toggleCartOpen}>{itemQuantities}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
