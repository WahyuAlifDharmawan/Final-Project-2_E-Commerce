import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user") || localStorage.removeItem("admin");
    navigate("/");
  };

  const handleHome = () => {
    if (localStorage.getItem("admin")) {
      navigate("/stok");
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-700">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            {/* <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"> */}
            <h1
              
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            >
              Bukapedia
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                />
              </svg>
            </h1>

            <button
              className="text-white cursor-pointer text-xl i-3 leading-none px-3 py-1 border border-solid border-white rounded bg-transparent block lg:hidden outline-none focus:outline-white"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars font-underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none align-middle lg:ml-auto">
              <li className="nav-item">
                <span className="">
                  <button
                    className="px-3 align-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    onClick={() => handleHome()}
                  >
                    Home
                  </button>
                </span>
                {/* </a> */}
              </li>

              {/* <li className="nav-item">
                <span className="ml-2">
                  <Link
                    to="/"
                    className="px-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >
                    Home
                  </Link>
                </span>
                
              </li> */}

              {localStorage.getItem("user") && (
                <li className="nav-item">
                  <span className="ml-2">
                    <Link
                      to="/cart"
                      className="px-3 align-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      Cart
                    </Link>
                  </span>
                  {/* </a> */}
                </li>
              )}

              {localStorage.getItem("admin") && (
                <li className="nav-item">
                  <span className="ml-2">
                    <Link
                      to="/rekap"
                      className="px-3 align-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      Rekap Penjualan
                    </Link>
                  </span>
                  {/* </a> */}
                </li>
              )}

              {!localStorage.getItem("user") && !localStorage.getItem("admin") && (
                <li className="nav-item">
                  <span className="ml-2">
                    <Link
                      to="/login"
                      className="px-3 align-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      LOGIN
                    </Link>
                  </span>
                  {/* </a> */}
                </li>
              )}

              {localStorage.getItem("user") && (
                <li className="nav-item">
                  <span className="">
                    <button
                      className="px-3 align-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      onClick={() => handleLogout()}
                    >
                      Logout
                    </button>
                  </span>
                  {/* </a> */}
                </li>
              )}

              {localStorage.getItem("admin") && (
                <li className="nav-item">
                  <span className="">
                    <button
                      className="px-3 align-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      onClick={() => handleLogout()}
                    >
                      Logout
                    </button>
                  </span>
                  {/* </a> */}
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
