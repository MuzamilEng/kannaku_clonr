import Layout from "../layouts/Layout";
import Head from "next/head";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import AddRetainer from "../retainers/Addretainer";

const AddRetainerPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Retainer Invoice</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <AddRetainer />
    </div>
  );
};

AddRetainerPage.getLayout = (page) => (
  <Layout>
    <Header />
    <Sidebar />
    {page}
  </Layout>
);

export default AddRetainerPage;
