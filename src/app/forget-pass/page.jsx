"use client";

import { use, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/Context/AuthContext";
import Swal from "sweetalert2";
export default function ForgetPassword() {
  const [email, setEmail] = useState("");
    const { forgetPassword } = use(AuthContext);
      const router = useRouter();
  const handleForgetPassword = (event) => {
    event.preventDefault();
    if (!email) {
       Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please Enter Your Email First",
              });
      return;
    }
    forgetPassword(email)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Password Reset email sent! Check your Inbox",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/login");
      })
      .catch((error) => {
        Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message,
                confirmButtonColor:"#FF5A3C"
              });
      });
  };

  return (
    <div>
      <Head>
        <title>Forget Password</title>
      </Head>

      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="card bg-white w-[95%] md:w-[60%] lg:w-[40%] 2xl:w-[30%] rounded-lg shadow-2xl">
          <div className="card-body px-6 py-8">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
              Forgot your <span className="text-[#A86111]">password ?</span>
            </h1>
            <p className="text-center text-gray-600 mb-6 text-sm font-medium">
              Enter your email below to receive a password reset link.
            </p>

            <form onSubmit={handleForgetPassword}>
              <label className="label text-gray-700 font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="input w-full p-3 mb-4 text-gray-700 bg-gray-100 rounded-md focus:outline-none "
                required
              />

              <button
                type="submit"
                className="btn w-full bg-[#A86111] hover:bg-orange-900 text-white font-semibold py-3 rounded-md transition-all duration-300"
              >
                Send Reset Link
              </button>
            </form>

            <p className="text-center text-gray-600 mt-4">
              Remember your password?{" "}
              <Link href="/login" className="text-[#A86111] hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
