"use client";
import Image from "next/image";
import { useState } from "react";
import { BsDownload } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../3dmodels/Logo";

export default function Navbar() {
  const [hideMobileMenu, setHideMobileMenu] = useState(true);

  return (
    <nav className="border-gray-200 bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="#" className="flex items-center">
          <div className="h-32 w-24">
            <Logo zoom={1} />
          </div>
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            JSLegend
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setHideMobileMenu((prev) => !prev)}
        >
          <span className="sr-only">Open main menu</span>
          <RxHamburgerMenu size={32} />
        </button>
        <div
          className={`${
            hideMobileMenu ? "hidden" : ""
          } w-full md:block md:w-auto`}
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
            <li>
              <a
                href="#"
                className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block flex rounded py-2 pl-3 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Resume
                <span className="px-2 py-1">
                  <BsDownload />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
