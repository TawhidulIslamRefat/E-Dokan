"use client";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
     const links = (
    <>
      <li className="text-lg font-medium">
        <Link href="/">Home</Link>
      </li>
      <li className="text-lg font-medium">
        <Link href="/products">All Products</Link>
      </li>
      <li className="text-lg font-medium">
        <Link href="/add-product">Add Products</Link>
      </li>
      <li className="text-lg font-medium">
        <Link href="/manage-products">Manage Products</Link>
      </li>
    </>);
  return (
   <div className="bg-base-300 shadow-2xs">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <Link href="/">
            <div className="text-3xl font-semibold text-[#A86111] flex items-center gap-1">
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

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end space-x-4">
          <Link
            href="/login"
            className="text-white bg-[#A76111] text-lg font-medium px-4 py-2 rounded-sm 
             hover:bg-black transform hover:scale-105 duration-300"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-white bg-[#A76111] text-lg font-medium px-4 py-2 rounded-sm 
             hover:bg-black transform hover:scale-105 duration-300"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}


