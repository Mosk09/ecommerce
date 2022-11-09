import style from "../styles/CartButton.module.css";
import { useAppContext } from "./StateWrapper";

export default function CartButton({ item }) {
  const cart = useAppContext();

  function handleClick() {
    cart.addItemToCart(item);
    cart.openCart();
  }
  return (
    <button className={style.button} onClick={handleClick}>
      Add to cart
    </button>
  );
}
