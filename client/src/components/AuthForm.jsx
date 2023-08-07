import { useState, useCallback } from "react";
import logo from "../assets/Images/NoteXlogo.png";
import { BsGithub, BsGoogle } from "react-icons/bs";
import AuthSocialButton from "./AuthSocialButton";

const AuthForm = () => {
  const [variant, setVariant] = useState("LOGIN");

  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // form submission logic
  };

  return (
    <div className="bg-custom h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="flex justify-center items-center h-full">
          <img src={logo} className="w-40 h-40" />
        </div>
        <h1 className="text-2xl mb-4 text-gray-700 text-center pt-4 mr-2 font-bold opacity-50">
          {variant === "REGISTER" ? "Register" : "Login"}
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            {variant === "REGISTER" && (
              <div className="mb-4">
                <label
                  className="block text-gray-600 text-sm mb-2"
                  htmlFor="displayname"
                >
                  Display Name
                </label>
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  id="displayname"
                  type="text"
                />
              </div>
            )}
            <label className="block text-gray-600 text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              id="email"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-600 text-sm mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              id="password"
              type="password"
            />
          </div>
          <div className="pt-4">
            <button
              className="bg-white px-8 py-2 rounded-full 
              w-full
              text-lg hover:bg-gray-300 transition duration-300
              bg-gradient-to-r from-indigo-500 to-pink-500 
              hover:from-indigo-600 hover:via-pink-600
              hover:to-red-600 focus:outline-none text-white uppercase font-bold shadow-md mx-auto p-5
             "
              type="submit"
            >
              {variant === "REGISTER" ? "Register" : "Login"}
            </button>
          </div>

          <div className="mt-6">
            <div className="relative">
              <div
                className="
                absolute 
                inset-0 
                flex 
                items-center
              "
              >
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction("github")}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction("google")}
            />
          </div>

          <div className="flex justify-center items-center pt-4">
            {variant === "REGISTER" ? (
              <>
                <p className="mr-2 font-bold opacity-50">Already have an account?</p>
                <button onClick={toggleVariant} className="mr-2 font-bold opacity-50 underline">
                  Login here
                </button>
              </>
            ) : (
              <>
                <p className="mr-2 mr-2 font-bold opacity-50">New to NoteX?</p>
                <button onClick={toggleVariant} className="mr-2 font-bold opacity-50 underline">
                  Register here
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
