import React from "react";
import { AUTHOR_NAME } from "../../constants/common";

const Footer = () => {
  return (
    <footer className='mt-auto z-50 bg-slate-900'>
      <div className='container mx-auto px-8 flex flex-col items-center py-8 border-t border-slate-700'>
        <div className='mx-auto'>
          Copyright &copy;{" "}
          {new Date().getFullYear() === 2022
            ? "2022"
            : `2022 - ${new Date().getFullYear()}`}{" "}
          {AUTHOR_NAME}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
