"use client";
import { AuthContext } from "@/Context/AuthContext";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { use } from "react";
import Swal from "sweetalert2";
export default function Navbar() {
  const { user, logOut } = use(AuthContext);
  const pathname = usePathname();
  const links = (
    <>
      <li
        className={`text-lg font-medium ${
          pathname === "/" ? "text-[#A86111] font-bold" : ""
        }`}
      >
        <Link href="/">Home</Link>
      </li>
      <li
        className={`text-lg font-medium ${
          pathname.startsWith("/products") ? "text-[#A86111] font-bold" : ""
        }`}
      >
        <Link href="/products">All Products</Link>
      </li>
      {user && (
        <>
          <li
            className={`text-lg font-medium ${
              pathname === "/addProductPage" ? "text-[#A86111] font-bold" : ""
            }`}
          >
            <Link href="/addProductPage">Add Products</Link>
          </li>
          <li
            className={`text-lg font-medium mb-2 ${
              pathname === "/manageProducts" ? "text-[#A86111] font-bold" : ""
            }`}
          >
            <Link href="/manageProducts">Manage Products</Link>
          </li>
        </>
      )}
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logout Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! ",
          error,
        });
      });
  };
  return (
    <div className="bg-base-300 shadow-2xs sticky top-0 z-50">
      <div className="navbar w-full lg:w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" p-2 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-300 rounded-box mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <Link href="/">
            <div className="text-sm sm:text-xl md:text-3xl  font-semibold text-[#A86111] flex items-center gap-1">
              <Image
                src="https://qx-plank.myshopify.com/cdn/shop/files/fav-icon.png?v=1738776228&width=240"
                alt="E-Dokan Logo"
                width={40}
                height={40}
                className="object-cover"
              />
              <span>E-Dokan</span>
            </div>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end space-x-1.5 md:space-x-4">
          {user && user.photoURL ? (
            <>
              <div className="dropdown dropdown-left">
                <div tabIndex={0} role="button" className=" m-1">
                  <Image
                    className="h-10 md:h-12 rounded-full"
                    src={user.photoURL}
                    width={45}
                    height={15}
                    alt="user avator"
                  />
                </div>
                <div
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-300 rounded-box z-1 w-65 p-2 shadow-sm mt-16"
                >
                  <div className="border-b-2 border-gray-400">
                    <h1 className="text-sm md:text-[18px] font-bold pt-2 text-center">
                      {user.displayName}
                    </h1>
                    <p className="text-xs md:text-sm text-black pb-2 text-center">
                      {user.email}
                    </p>
                  </div>
                  <div>
                    <button
                      className=" btn bg-[#A76111] text-white w-full text-[12px] md:text-[15px] my-1 md:my-2"
                      onClick={handleLogOut}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link
                href="/loginPage"
                className={`text-white bg-[#A76111] text-lg font-medium px-2 py-1 md:px-4 md:py-2 rounded-sm 
             hover:bg-black transform hover:scale-105 duration-300`}
              >
                Login
              </Link>
              <Link
                href="/register"
                className={`text-white bg-[#A76111] text-lg font-medium px-2 py-1 md:px-4 md:py-2  rounded-sm 
             hover:bg-black transform hover:scale-105 duration-300`}
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
