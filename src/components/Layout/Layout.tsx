import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <div
      id='app'
      className='flex flex-col min-h-screen overflow-hidden bg-gray-100 text-charcoal dark:bg-slate-700 dark:text-gainsboro'
    >
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
