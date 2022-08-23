import React from "react";
import Calendar from "../components/Calendar/Calendar";
import Layout from "../components/Layout/Layout";
import { NextPageWithLayout } from "./_app";

const HomePage: NextPageWithLayout = () => {
  return <Calendar />;
};

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Layout.Main>{page}</Layout.Main>
    </Layout>
  );
};

export default HomePage;
