import Head from "next/head";
import Layout from "../../layouts/Layout";
import Sidebar from "../../layouts/Sidebar";
import Header from "../../layouts/Header";
import { useRouter } from "next/router";
import Report from "../../hospital/Reports";

const ReportPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Kanakku</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Report />
    </div>
  );
};

ReportPage.getLayout = (page) => (
  <Layout>
    {/* <Header />
        <Sidebar /> */}
    {page}
  </Layout>
);

export default ReportPage;
