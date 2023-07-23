import Layout from "../../layouts/Layout";
import Head from "next/head";
// import Header from "../../layouts/Header";
import { useRouter } from "next/router";
import Checkout from "../../e-commerce/Checkout";

const CheckoutPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Address Details | Jumia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Checkout />
    </div>
  );
};

CheckoutPage.getLayout = (page) => (
  <Layout>
    {/* <Header /> */}
    {page}
  </Layout>
);

export default CheckoutPage;
