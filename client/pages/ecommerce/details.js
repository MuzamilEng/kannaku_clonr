import Layout from "../../layouts/Layout";
import Sidebar from "../../layouts/Sidebar";
import Head from "next/head";
import Header from "../../layouts/EcommerceHeader";
import { useRouter } from "next/router";
import Details from "../../e-commerce/Details";

const DetailsPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Kanakku</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Details />
    </div>
  );
};

DetailsPage.getLayout = (page) => (
  <Layout>
    <Header />
    <Sidebar />
    {page}
  </Layout>
);

export default DetailsPage;
