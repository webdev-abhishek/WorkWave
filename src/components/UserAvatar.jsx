import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FaUser, FaUserLock } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getInitials } from "../utils";

const UserAvatar = () => {
  const [open, setOpen] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    console.log("logout");
  };

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <MenuButton className="w-10 h-10 items-center justify-center rounded-full bg-blue-600">
            <span className="text-white font-semibold">
              {user ? user.name.charAt(0) : 'U'}
            </span>
          </MenuButton>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none">
            <div className="p-4">
              <MenuItem>
                {({ active }) => (
                  <button className={`${
                      active ? 'bg-gray-100' : ''
                    } text-gray-700 group flex w-full items-center rounded-md px-2 py-2 text-base`}>
                    Profile
                  </button>
                )}
              </MenuItem>

              <MenuItem>
                {({ active }) => (
                  <button className={`${
                      active ? 'bg-gray-100' : ''
                    } text-gray-700 group flex w-full items-center rounded-md px-2 py-2 text-base`}>
                    Change Password
                  </button>
                )}
              </MenuItem>

              <MenuItem>
                {({ active }) => (
                  <button className={`${
                      active ? 'bg-gray-100' : ''
                    } text-red-600 group flex w-full items-center rounded-md px-2 py-2 text-base`}>
                    Logout
                  </button>
                )}
              </MenuItem>
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
    </>
  );
};

export default UserAvatar;