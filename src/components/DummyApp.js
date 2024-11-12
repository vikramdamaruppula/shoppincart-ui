import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";

import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/header/Main"; // first page
import NewProduct from "./components/newProduct/NewProduct"; // third one
import ProductDetails from "./components/ProductDetails/ProductDetails"; // last page
import ProductMain from "./components/newProduct/ProductMain";
import Login from "./components/Login/Login";
import NotFound from "./components/Login/NotFound";
import { useEffect, useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
// import { AuthProvider } from "./components/AuthProvider";

function AppContent2() {
  const location = useLocation();

  const [userDetails, setUserDetails] = useState({
    type: "",
    loggedIn: false,
  });

  const userDetailsAll = JSON.parse(localStorage.getItem("userDetails")) || "";

  const isAuthenticated = userDetailsAll.loggedIn;
  const userType = userDetailsAll.type;

  console.log(userDetailsAll.type, "type all");

  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  }, [userDetails]);

  return (
    <div className="App">
      {isAuthenticated && (
        <div className="sidebar">
          <Sidebar setUserDetails={setUserDetails} />
        </div>
      )}
      <div className="others">
        {/*  public routes =======> */}
        <Routes>
          {!isAuthenticated && (
            <>
              <Route
                path="/login"
                element={<Login setUserDetails={setUserDetails} />}
              />
              {/* public default route */}
              <Route
                path="/"
                element={<Login setUserDetails={setUserDetails} />}
              />
            </>
          )}

          {/* protected Route   ======> */}
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/login" element={<Navigate to="/" />} />

            {/* role based logins */}

            {userType === "user" ? (
              //  for user ====
              <>
                <Route
                  path="/"
                  element={<Navigate to="/inventory" replace />}
                />
                <Route
                  path="/inventory"
                  isAuthenticated={isAuthenticated}
                  element={<Main />}
                />
                <Route
                  path="/inventory/Newinventory"
                  element={<ProductMain />}
                />
                <Route path="/inventory/product" element={<NewProduct />} />
                <Route
                  path="/inventory/product/item"
                  element={<Navigate to="/" />}
                />
              </>
            ) : (
              // for admins ===>
              <>
                <Route
                  path="/"
                  element={<Navigate to="/inventory" replace />}
                />
                <Route
                  path="/inventory"
                  isAuthenticated={isAuthenticated}
                  element={<Main />}
                />
                <Route
                  path="/inventory/Newinventory"
                  element={<ProductMain />}
                />
                <Route path="/inventory/product" element={<NewProduct />} />
                <Route
                  path="/inventory/product/item"
                  element={<ProductDetails />}
                />
              </>
            )}

            {/*  protected default route  */}
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

const App2 = () => {
  return (
    <Router>
      <AppContent2 />
    </Router>
  );
};

export default App2;



import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
// import { useAuth } from "../AuthProvider";

const Login = ({ setUserDetails }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === "user@gmail.com" && password === "password") {
      setUserDetails({ type: "user", loggedIn: true });
      navigate("/inventory");
    } else if (username === "admin@gmail.com" && password === "password") {
      setUserDetails({ type: "admin", loggedIn: true });
      navigate("/inventory");
    } else {
      alert("username or password is not correct");
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-main">
          <h3 className="login-text">Let's Login !</h3>
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor="email" className="toggle-text">
                Email:
              </label>
              <input
                className="field-input"
                type="email"
                id="email"
                value={username}
                placeholder="Please Enter Email"
                required
                onChange={handleUsername}
              />
            </div>

            <div className="input-container">
              <label htmlFor="password" className="toggle-text">
                password:
              </label>
              <input
                className="field-input"
                type="password"
                id="password"
                value={password}
                placeholder="Enter Password"
                required
                onChange={handlePassword}
              />
            </div>

            <div className="">
              <p>forgot Password </p>
              <button type="submit" className="section-button">
                Login !
              </button>
            </div>
          </form>
          {/* <p style={{ color: "yellowgreen", textAlign: "center" }}>
            {" "}
            use username as : user@gmail.com ,password as : password{" "}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
