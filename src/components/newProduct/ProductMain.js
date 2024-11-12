import React, { useState } from "react";
import Fields from "./Fields";
import Header from "../header/Header";
import { useLocation, useNavigate } from "react-router-dom";

const ProductMain = () => {
  const [click, setClick] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handlePage = () => {
    setClick(true);
    setTimeout(() => {
      navigate("/inventory/product");
    }, 1000);
  };
  return (
    <>
      <Header />
      <section className="section-main">
        <div className="section-top">
          <div className="section-container">
            <p className="section-text">New Inventory Item</p>
            <div className="button-container">
              <select className="select-new">
                <option>Save as Draft</option>
                <option>Save for later</option>
                <option>Save as Document</option>
              </select>
              <button className="section-button-new" onClick={handlePage}>
                <span> Save & publish </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Fields click={click} />
    </>
  );
};

export default ProductMain;
