import React from "react";

const Footer = () => {
  return (
    <footer className="p-4  bg-slate-700 shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a className="flex items-center mb-4 sm:mb-0">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            BUKAPEDIA
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0 text-white">
          <li>
            <a
              href="/about"
              className="mr-4 hover:underline md:mr-6 font-semibold"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6 font-semibold">
              HOME
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-white sm:text-center dark:text-gray-400">
        © 2022 Kelompok-3. All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
