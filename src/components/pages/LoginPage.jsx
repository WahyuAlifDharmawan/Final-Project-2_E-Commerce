import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { authLoginApi } from "../../features/login/AuthSlice";

const LoginPage = () => {
  // const authState = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const location = useLocation();

  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  // const doSubmit = (event, { children }) => {
  //   event.preventDefault();
  //   dispatch(authLoginApi({ email, password }));
  //   setEmail("");
  //   setPassword("");
  //   // localStorage.setItem("token", "login");
  //   // if (!localStorage.getItem("user")) {
  //   //   return <Navigate to="/login" state={{ from: location }} />;
  //   // }
  //   // return children;
  // };

  const handleLogin = () => {
    // event.preventDefault();
    // dispatch(authLoginApi({ email, password }));
    // setEmail("");
    // setPassword("");
    if (email === "user@login.com" && password === "user") {
      localStorage.setItem("user", "JklEi95iKr2l");
      navigate(`/`, { replace: location });
    } else if (email === "admin@login.com" && password === "admin123") {
      localStorage.setItem("admin", "bhd3b3SGT8");
      navigate(`/stok`, { replace: location });
      //   // alert("salah");
    } else {
      alert("Email atau Password salah");
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
          Login
        </h1>
        <br />
        <form className="mt-6 ">
          <div className="mb-2">
            <label
              // for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email Address
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="email"
              onChange={emailChange}
              value={email}
            />
          </div>
          <div className="mb-2">
            <label
              // for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="password"
              onChange={passwordChange}
              value={password}
            />
          </div>
          <br />
          <div className="mt-6">
            {/* <input type="submit" value="Login" /> */}
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              onClick={() => handleLogin()}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
