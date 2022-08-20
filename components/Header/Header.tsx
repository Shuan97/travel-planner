import Image from "next/image";
import React from "react";
import DarkModeToggle from "./DarkModeToggle";

type Props = {};

const Header = ({}: Props) => {
  return (
    <header className='px-4 py-2 bg-slate-400 dark:bg-slate-900'>
      <nav className='flex items-center mx-8'>
        {/* just an example - TODO */}
        <Image
          src='https://images.pexels.com/photos/13248572/pexels-photo-13248572.jpeg'
          alt='logo'
          height='30'
          width='30'
        />
        <h1 className='text-lg mx-2'>Travel Planner</h1>
        <div className='flex-1'></div>
        <DarkModeToggle />
      </nav>
    </header>
  );
};

export default Header;
