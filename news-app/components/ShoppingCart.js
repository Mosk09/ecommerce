import { useAppContext } from "./StateWrapper";
import Product from "./product";
import style from "../styles/ShoppingCart.module.css";
export default function ShoppingCart() {
  const cart = useAppContext();

  function handleCloseCart() {
    cart.CloseCart();
  }
  function getTotal() {
    const total = cart.items.reduce(
      (acc, item) => acc + item.qty * item.price,
      0
    );
    return total;
  }

  return (
    <div
      className={style.ShoppingCart}
      style={{ display: cart.isOpen ? "block" : "none" }}
    >
      {cart.items.length === 0 ? (
        <div className={style.empty}>Cart is empty</div>
      ) : (
        <>
          <h3 className={style.cartProducts}>Tus Productos</h3>
          <div>
            {cart.items.map((item) => (
              <Product
                key={item.id}
                item={item}
                showAs="ListItem"
                qty={item.qty}
              />
            ))}
          </div>
          <div className={style.total}>Total: ${getTotal()}</div>
        </>
      )}
      <button className={style.close} onClick={handleCloseCart}>
        Close
      </button>
    </div>
  );
}
