import Layout from "@/components/Layout/Layout";
import React from "react";
import { NextPageWithLayout } from "./_app";

const ErrorPage: NextPageWithLayout = () => {
  return (
    <div className='flex-center flex-1 text-4xl'>404 - Page Not Found</div>
  );
};

ErrorPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ErrorPage;
