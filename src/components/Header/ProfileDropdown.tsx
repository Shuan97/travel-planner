import { Menu, Transition } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { Fragment } from "react";
import { classNames } from "../../utils/common";

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
        <Menu.Items className='absolute right-0 z-10 mt-2 origin-top-right divide-y divide-gray-200 bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            <Link href='/profile'>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm cursor-pointer"
                    )}
                  >
                    Profile
                  </div>
                )}
              </Menu.Item>
            </Link>
            <Link href='/dashboard'>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm cursor-pointer"
                    )}
                  >
                    Dashboard
                  </div>
                )}
              </Menu.Item>
            </Link>
            <Link href='/profile/settings'>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm cursor-pointer"
                    )}
                  >
                    Settings
                  </div>
                )}
              </Menu.Item>
            </Link>
          </div>
          <div className='py-1'>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='#'
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm cursor-pointer"
                  )}
                >
                  Sign out
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileDropdown;
