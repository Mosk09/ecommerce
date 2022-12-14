import Head from "next/head";
import style from "../styles/Layout.module.css";
import Menu from "./menu";
import ShoppingCart from "./ShoppingCart";

export default function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>Products {title ? `|  ${title}` : ""}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu></Menu>

      <div className={style.container}>{children}</div>
      <ShoppingCart />
    </div>
  );
}
