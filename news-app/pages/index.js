import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import { getLatestItems } from "../services/itemServices";
import styleProduct from "../styles/Product.module.css";
import Product from "../components/product";

export default function Home({ items }) {
  return (
    <Layout title="Bienvenido">
      <div className={styles.banner}>
        <div className={styles.bannerBackground}>
          <div className={styles.bannerInfo}>
            <h2>2023 para memorizar ya</h2>
            <p>
              Amémonos unos a otros. Y hagámoslo muy fuerte. La moda lo dice,
              los diseñadores lo creen. A la próxima primavera/verano de 2023
              tendremos que llegar fuertes y orgullosos de haber superado el
              invierno con todas las adversidades que conlleva.
            </p>
          </div>
        </div>
      </div>

      <h3>Latest Products</h3>
      <div className={styleProduct.items}>
        {items &&
          items.map((item) => (
            <Product key={item.id} item={item} showAs="item" />
          ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await getLatestItems();
  return {
    props: {
      items: res,
    },
  };
}
