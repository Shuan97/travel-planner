import React from "react";
import Layout from "../../components/Layout/Layout";
import { NextPageWithLayout } from "../_app";

const ProfilePage: NextPageWithLayout = () => {
  return <div>Profile</div>;
};

ProfilePage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Layout.Main>{page}</Layout.Main>
    </Layout>
  );
};

export default ProfilePage;
