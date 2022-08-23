import React from "react";
import Layout from "../../components/Layout/Layout";
import { NextPageWithLayout } from "../_app";

const ProfileSettingsPage: NextPageWithLayout = () => {
  return <div>Profile settings</div>;
};

ProfileSettingsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ProfileSettingsPage;
