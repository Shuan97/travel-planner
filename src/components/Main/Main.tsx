import React from "react";
interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Main = ({ children }: Props) => {
  return (
    <main role='main' className='relative container mx-auto px-4 lg:px-8 py-4'>
      {children}
    </main>
  );
};

export default Main;
