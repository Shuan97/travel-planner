import CommentCard from "@/components/Cards/CommentCard";
import React from "react";
import Layout from "../components/Layout/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <div>Dashboard</div>
      <div className='flex py-8 justify-center space-x-16'>
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </div>
    </Layout>
  );
};

export default Dashboard;
