import Layout from "../../layouts/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import Cart from "../../e-commerce/Cart";
import Sidebar from "../../layouts/Sidebar";
import Header from "../../layouts/EcommerceHeader";

const CartPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Kanakku</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Cart />
    </div>
  );
};

CartPage.getLayout = (page) => (
  <Layout>
    <Header />
    <Sidebar />
    {page}
  </Layout>
);

export default CartPage;
