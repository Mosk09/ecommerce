import { useAppContext } from "../components/StateWrapper";
import Product from "../components/product";
import style from "../styles/ShoppingCart.module.css";

export default function () {
  const cart = useAppContext();

  function getTotal() {
    const total = cart.items.reduce(
      (acc, item) => acc + item.qty * item.price,
      0
    );
    return total;
  }
  return (
    <>
      <h3 className={style.cartProducts}>Your Products</h3>
      <div>
        {cart.items.map((item) => (
          <Product key={item.id} item={item} showAs="ListItem" qty={item.qty} />
        ))}
      </div>
      <div className={style.total}>Total: ${getTotal()}</div>
    </>
  );
}
