import Link from "next/link";

export default function Home() {
     const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen lg:my-0 lg:min-h-screen">
        <title>Login</title>
        <div className="card bg-base-100  w-[95%]   md:w-[70%] lg:w-[60%] 2xl:w-[35%] shrink-0 rounded-[5px] shadow-2xl ">
          <div className="card-body px-4 lg:px-15">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold text-center mt-2 lg:mt-[30px] pb-3 lg:pb-10 border-b border-base-300 px-5">
              Login your <span className="text-[#FF5A3C]">account</span>
            </h1>
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset ">
                <label className="label text-sm sm:text-xl font-semibold text-[#403F3F] dark:text-gray-300 mb-1 lg:mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input  w-full text-xs sm:text-base  font-normal mb-2 lg:mb-5 text-gray-500 bg-[#F3F3F3]"
                  placeholder="Enter your email address"
                />
                <label className="label text-sm sm:text-xl font-semibold text-[#403F3F] mb-1 lg:mb-3 dark:text-gray-300">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="input w-full text-xs sm:text-base p-2 sm:p-3 bg-[#F3F3F3] text-gray-500"
                    placeholder="Enter your password"
                    required
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-3 right-4 cursor-pointer text-[16px]"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <div>
                  <Link
                    to="/forget-pass"
                    state={{ email: email }}
                    className="link link-hover text-[13px]"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="btn bg-[#FF5A3C] hover:bg-orange-700 text-white mt-4 mb-2"
                >
                  Login
                </button>
              </fieldset>
            </form>
            <button
              onClick={handleGoogleLogin}
              className="btn bg-white text-black border-[#e5e5e5] hover:bg-[#FF5A3C] hover:text-white"
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
            <p className="text-sm md:text-[16px] font-semibold text-[#706F6F] text-center">
              Dont’t Have An Account ?
              <Link className="text-[#F75B5F] hover:underline" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
