import {
  HeartIcon,
  LogoutIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import ToastMessage from "../Toast";
import DarkModeToggle from "./DarkModeToggle";

type Props = {};

const Header = ({}: Props) => {
  return (
    <header className='px-4 py-4 bg-slate-400 dark:bg-slate-900'>
      <nav className='flex items-center mx-8'>
        <div className='flex'>
          {/* just an example - TODO */}
          <Image
            src='https://images.pexels.com/photos/13248572/pexels-photo-13248572.jpeg'
            alt='logo'
            height='30'
            width='30'
          />
          <h1 className='text-lg mx-2'>Travel Planner</h1>
        </div>
        <div className='flex-1'></div>
        <div className='flex space-x-4'>
          <UserCircleIcon
            className='h-6 w-6 hover:text-slate-600 dark:hover:text-gray-400 cursor-pointer'
            onClick={() => alert("Heart for you! 🧡")}
          />
          <HeartIcon
            className='h-6 w-6 hover:text-slate-600 dark:hover:text-gray-400 cursor-pointer'
            onClick={() =>
              ToastMessage({
                type: "success",
                message: "🧡",
                title: "Heart for you!",
              })
            }
          />
          <DarkModeToggle />
          <LogoutIcon className='h-6 w-6 hover:text-slate-600 dark:hover:text-gray-400 cursor-pointer' />
        </div>
      </nav>
    </header>
  );
};

export default Header;
