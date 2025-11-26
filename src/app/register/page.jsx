"use client";

import Link from "next/link";
import { useRouter } from "next/navigation"; 
import { Eye, EyeOff } from "lucide-react";
import { use, useState } from "react";
import Head from "next/head";
import { AuthContext } from "@/Context/AuthContext";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, setUser, signInGoogle, updateUser } = use(AuthContext);
   const router = useRouter();

   const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(name, photo, email, password);
    createUser(email, password)
  .then((result) => {
    const user = result.user;

    updateUser({
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        setUser({
          ...user,
          displayName: name,
          photoURL: photo,
        });
      })
      router.push("/")
      .catch((error) => {
        console.log("Update user error:", error);
      });
  })
  .catch((error) => {
    console.log("Create user error:", error);
  });
   }

   const handleGoogleLogin = () => {
    signInGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        router.push("/")
      })
      .catch((error) => {
       console.log(error);
      });
  };


  return (
    <div>
      <Head>
        <title>Register</title>
      </Head>
      <div className="flex justify-center items-center min-h-screen">
        <div className="card bg-base-100 w-[95%] md:w-[70%] lg:w-[60%] 2xl:w-[35%] rounded-[15px] shadow-2xl">
          <div className="card-body px-4 lg:px-16">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold text-center mt-2 lg:mt-8 pb-3 lg:pb-10 border-b border-base-300 px-5">
              Create your <span className="text-[#A86111]">account</span>
            </h1>

            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                {/* Name */}
                <label className="label text-sm sm:text-xl font-semibold text-[#403F3F] mb-1 lg:mb-3">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input w-full text-xs sm:text-base p-2 sm:p-3 bg-[#F3F3F3] text-gray-500 rounded-md focus:outline-none  mb-4"
                  required
                />

                {/* Email */}
                <label className="label text-sm sm:text-xl font-semibold text-[#403F3F] mb-1 lg:mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input w-full text-xs sm:text-base p-2 sm:p-3 bg-[#F3F3F3] text-gray-500 rounded-md focus:outline-none  mb-4"
                  required
                />

                {/* Password */}
                <label className="label text-sm sm:text-xl font-semibold text-[#403F3F] mb-1 lg:mb-3">
                  Password
                </label>
                <div className="relative mb-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    className="input w-full text-xs sm:text-base p-2 sm:p-3 bg-[#F3F3F3] text-gray-500 rounded-md focus:outline-none "
                    required
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-3 right-4 cursor-pointer text-[16px]"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </span>
                </div>

                {/* Profile Image */}
                <label className="label text-sm sm:text-xl font-semibold text-[#403F3F] mb-1 lg:mb-3">
                  Profile URL
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Profile URL"
                  className="input w-full text-xs sm:text-base p-2 sm:p-3 bg-[#F3F3F3] text-gray-500 rounded-md focus:outline-none  mb-4"
                />

                {/* Submit */}
                <button
                  type="submit"
                  className="btn bg-[#A86111] hover:bg-orange-900 text-white mt-2 mb-2 w-full"
                >
                  Register
                </button>
              </fieldset>
            </form>

            {/* Google login */}
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
                  <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                  <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                  <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                  <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                </g>
              </svg>
              Register with Google
            </button>

            {/* Link to login */}
            <p className="text-sm md:text-[16px] font-semibold text-[#706F6F] text-center mt-4">
              Already have an account?{" "}
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
