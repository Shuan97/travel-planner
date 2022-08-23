import { Menu, Transition } from "@headlessui/react";
import {
  CogIcon,
  CubeIcon,
  LogoutIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import React, { forwardRef, Fragment } from "react";
import { classNames } from "@/utils/common";

const ProfileDropdown = () => {
  return (
    <Menu as='div' className='relative'>
      <Menu.Button className='flex hover:text-gray-600'>
        <span className='sr-only'>Open profile options</span>
        <UserCircleIcon className='svg-icon' aria-hidden='true' />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-300'
        enterFrom='transform opacity-0 scale-75'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-150'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-75'
      >
        <Menu.Items className='absolute right-0 z-10 mt-2 origin-top-right divide-y divide-gray-200 bg-white rounded-md shadow-lg w-48 ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='px-1 py-1'>
            <Link href='/profile'>
              <Menu.Item>
                {({ active }) => (
                  <ItemContent
                    active={active}
                    icon={<UserCircleIcon />}
                    label='Your Profile'
                  />
                )}
              </Menu.Item>
            </Link>
            <Link href='/dashboard'>
              <Menu.Item>
                {({ active }) => (
                  <ItemContent
                    active={active}
                    icon={<CubeIcon />}
                    label='Dashboard'
                  />
                )}
              </Menu.Item>
            </Link>
            <Link href='/profile/settings'>
              <Menu.Item>
                {({ active }) => (
                  <ItemContent
                    active={active}
                    icon={<CogIcon />}
                    label='Settings'
                  />
                )}
              </Menu.Item>
            </Link>
          </div>
          <div className='px-1 py-1'>
            <Link href='/logout'>
              <Menu.Item>
                {({ active }) => (
                  <ItemContent
                    active={active}
                    icon={<LogoutIcon />}
                    label='Sign Out'
                  />
                )}
              </Menu.Item>
            </Link>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

interface ItemContentProps {
  active: boolean;
  children?: React.ReactNode;
  icon: JSX.Element;
  label: string;
}

const ItemContent = forwardRef(
  ({ active, children, icon, label, ...rest }: ItemContentProps, ref: any) => {
    return (
      <div
        ref={ref}
        {...rest}
        className={classNames(
          active ? "bg-slate-200 text-teal-700" : "text-charcoal",
          "group flex w-full items-center rounded-md text-sm px-2 py-2 cursor-pointer"
        )}
      >
        {React.cloneElement(icon, {
          className: "h-6 w-6 mr-2",
          "aria-hidden": "true",
        })}
        {label}
        {children}
      </div>
    );
  }
);

ItemContent.displayName = "ItemContent";

export default ProfileDropdown;
