import Profile from "@/components/Profile/Profile";
import React from "react";
import Layout from "../../components/Layout/Layout";
import { NextPageWithLayout } from "../_app";

const ProfilePage: NextPageWithLayout = () => {
  return (
    <div className='grid gap-8 grid-cols-profile py-8'>
      <div className='col-start-1'>
        <Profile />
      </div>
      <div className='col-start-2'>
        <div className='w-96 border border-blue-600'>Placeholder</div>
      </div>
    </div>
  );
};

ProfilePage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Layout.Main>{page}</Layout.Main>
    </Layout>
  );
};

export default ProfilePage;
