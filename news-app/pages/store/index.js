import Layout from "../../components/Layout";
import { getItems } from "../../services/itemServices";

import Product from "../../components/product.js";
import styleProduct from "../../styles/Product.module.css";

export default function index({ items }) {
  return (
    <Layout>
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
  const res = await getItems();
  return {
    props: {
      items: res,
    },
  };
}
