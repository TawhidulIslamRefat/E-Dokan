"use client";

import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { use, useState } from "react";
import Head from "next/head";
import { AuthContext } from "@/Context/AuthContext";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
 

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, setUser, signInGoogle } = use(AuthContext);
  const router = useRouter();

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
         Swal.fire({
              position: "center",
              icon: "success",
              title: "Login Successful",
              showConfirmButton: false,
              timer: 1500,
            });
        router.push("/");
      })
      .catch((error) => {
         Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",error,
              confirmButtonColor:"#FF5A3C"
            });
      });
  };

  const handleGoogleLogin = () => {
    signInGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
         Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/")
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          confirmButtonColor:"#FF5A3C",
          error,
        });
      });
  };

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <div className="flex justify-center items-center min-h-screen">
        <div className="card bg-base-100 w-[95%] md:w-[70%] lg:w-[60%] 2xl:w-[35%] rounded-2xl shadow-2xl">
          <div className="card-body px-4 lg:px-16">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold text-center mt-2 lg:mt-8 pb-3 lg:pb-10 border-b border-base-300 px-5">
              Login your <span className="text-[#A86111]">account</span>
            </h1>

            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label text-sm sm:text-xl font-semibold text-[#403F3F] mb-1 lg:mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="input w-full text-xs sm:text-base p-2 sm:p-3 bg-[#F3F3F3]  rounded-md focus:outline-none mb-5"
                />

                <label className="label text-sm sm:text-xl font-semibold text-[#403F3F] mb-1 lg:mb-3">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    className="input w-full text-xs sm:text-base p-2 sm:p-3 bg-[#F3F3F3]  rounded-md focus:outline-none"
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-3 right-4 cursor-pointer text-[16px]"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </span>
                </div>

                <div className="mt-2">
                  <Link
                    href="/forget-pass"
                    className="link link-hover text-[13px]"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="btn bg-[#A86111] hover:bg-orange-900 text-white mt-4 mb-2 w-full"
                >
                  Login
                </button>
              </fieldset>
            </form>

            <button
              onClick={handleGoogleLogin}
              className="btn bg-white text-black border-[#e5e5e5] hover:bg-orange-900 hover:text-white w-full mt-2 flex items-center justify-center gap-2"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>

            <p className="text-sm md:text-[16px] font-semibold text-[#706F6F] text-center mt-4">
              Don’t Have An Account?{" "}
              <Link href="/register" className="text-[#A86111] hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
