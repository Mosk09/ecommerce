import Link from "next/link";

import style from "../styles/Menu.module.css";
import { useAppContext } from "./StateWrapper";

export default function Menu() {
  const cart = useAppContext();
  function handleOpenCart() {
    cart.openCart();
  }

  return (
    <nav className={style.menu}>
      <div>
        <Link href="/">
          <p className={style.link}>Home</p>
        </Link>
        <Link href="/store">
          <p className={style.link}>Store</p>
        </Link>
        <Link href="/FAQ">
          <p className={style.link}>FAQ</p>
        </Link>
      </div>
      <div>
        <p className={style.link} href="#" onClick={handleOpenCart}>
          Cart ({cart.getNumberOfItems()})
        </p>
      </div>
    </nav>
  );
}
/* ☀️🌙 */
