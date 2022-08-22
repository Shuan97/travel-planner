import { HeartIcon, LogoutIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ToastMessage from "../Toast";
import DarkModeToggle from "./DarkModeToggle";
import ProfileDropdown from "./ProfileDropdown";

type Props = {};

const Header = ({}: Props) => {
  return (
    <header className='px-4 py-4 bg-slate-400 dark:bg-slate-900'>
      <nav className='flex items-center mx-8'>
        <Link href='/'>
          <div className='flex cursor-pointer'>
            {/* just an example - TODO */}
            <Image
              src='https://images.pexels.com/photos/13248572/pexels-photo-13248572.jpeg'
              alt='logo'
              height='30'
              width='30'
            />
            <h1 className='text-lg mx-2'>Travel Planner</h1>
          </div>
        </Link>
        <div className='flex space-x-4 ml-auto'>
          <ProfileDropdown />
          <HeartIcon
            className='svg-icon'
            onClick={() =>
              ToastMessage({
                type: "success",
                message: "[Message]: 🧡",
                title: "[Title]: Heart for you!",
              })
            }
          />
          <DarkModeToggle />
          <LogoutIcon className='svg-icon' />
        </div>
      </nav>
    </header>
  );
};

export default Header;
