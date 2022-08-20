import type { NextPage } from "next";
import React from "react";
import Calendar from "../components/Calendar/Calendar";
import Layout from "../components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Calendar />
    </Layout>
  );
};

export default Home;
