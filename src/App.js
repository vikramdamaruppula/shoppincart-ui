import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Sidebar from "./components/sidebar/Sidebar";

import Main from "./components/header/Main"; // first page
import Fields from "./components/newProduct/Fields"; // second

import NewProduct from "./components/newProduct/NewProduct"; // third one
import ProductDetails from "./components/ProductDetails/ProductDetails"; // last page
import ProductMain from "./components/newProduct/ProductMain";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="others">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/inventory/Newinventory" element={<ProductMain />} />
            <Route path="/inventory/product" element={<NewProduct />} />
            <Route
              path="/inventory/product/item"
              element={<ProductDetails />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
