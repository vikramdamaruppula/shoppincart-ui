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
import ProductMain from "./components/newProduct/ProductMain"; // second page

import Login from "./components/Login/Login";
import NotFound from "./components/Login/NotFound";
import { useEffect, useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import AnalyticsMain from "./components/analytics/AnalyticsMain";
// import { AuthProvider } from "./components/AuthProvider";

function AppContent() {
  const location = useLocation();

  const [userDetails, setUserDetails] = useState(
    JSON.parse(localStorage.getItem("userDetails")) || {
      type: "",
      loggedIn: false,
    }
  );

  const isAuthenticated = userDetails.loggedIn;
  const userType = userDetails.type;
  console.log(userDetails);

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
                <Route path="/analytics" element={<Navigate to="/" />} />
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
                <Route path="/analytics" element={<AnalyticsMain />} />
              </>
            )}
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
