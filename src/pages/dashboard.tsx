import CommentCard from "@/components/Cards/CommentCard";
import React from "react";
import Layout from "../components/Layout/Layout";
import { NextPageWithLayout } from "./_app";

const DashboardPage: NextPageWithLayout = () => {
  return (
    <>
      <div>Dashboard</div>
      <div className='flex py-8 justify-center space-x-16'>
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </div>
    </>
  );
};

DashboardPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default DashboardPage;
