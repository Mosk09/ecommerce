import Image from "next/image";
import Link from "next/link";
import { convertToPath } from "../lib/utils";
import style from "../styles/Product.module.css";
import CartButton from "./CartButton";
import { useAppContext } from "./StateWrapper";

export default function Product({ item, showAs, qty }) {
  const cart = useAppContext();
  function handleClick() {
    cart.addItemToCart(item);
  }

  function handleRest() {
    cart.removeOneQty(item);
  }
  function handleDeleteProduct() {
    cart.deleteProduct(item);
  }

  if (showAs === "Page") {
    return (
      <div className={style.page}>
        <div className={style.image}>
          <Image src={item.image} alt="not found" width={200} height={200} />
        </div>

        <div className={style.info}>
          <div>
            <h2>{item.title}</h2>
          </div>
          <div>
            <div className={style.price}>${item.price}</div>
            <div>{item.description}</div>
          </div>
          <div>
            <CartButton item={item} />
          </div>
        </div>
      </div>
    );
  }
  if (showAs === "ListItem") {
    return (
      <div className={style.listItem}>
        <div>
          <Image src={item.image} alt="not found" width={100} height={100} />
        </div>
        <div>
          <h3>{item.title}</h3>
          <div className={style.$}>{item.price}</div>
          <div className={style.ele}>
            <button onClick={handleRest}>-</button>
            {qty === 0 ? " " : <div> {qty} </div>}
            <button onClick={handleClick}>+</button>
          </div>
          {qty === 0 ? " " : <div>Subtotal: ${qty * item.price}</div>}
        </div>
        <div>
          <button className={style.cierre} onClick={handleDeleteProduct}>
            x
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className={style.item}>
      <div>
        <Link href={`/store/${convertToPath(item.title)}`}>
          <p>
            <Image src={item.image} alt="not found" width={300} height={300} />
          </p>
        </Link>
      </div>
      <div>
        <h3>
          <Link href={`/store/${item.title}`}>
            <p>{item.title}</p>
          </Link>
        </h3>
      </div>

      <div>${item.price}</div>
      <div>
        <CartButton item={item} />
      </div>
    </div>
  );
}
