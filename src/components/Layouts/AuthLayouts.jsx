import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  console.log(isDarkMode);
  return (
    <div
      className={`flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 ${
        isDarkMode && "bg-white"
      } `}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <button
          className="absolute p-2 text-white bg-blue-600 rounded right-2 top-2"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button> */}

        <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
          {title}
        </h2>
        {children}
        <p className="mt-5 text-sm text-center">
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}

          {type === "login" && (
            <Link to="/register" className="font-bold text-teal-600">
              Register
            </Link>
          )}

          {type === "register" && (
            <Link to="/login" className="font-bold text-teal-600">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayouts;
