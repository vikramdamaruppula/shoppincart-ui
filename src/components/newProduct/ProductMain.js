import React from "react";
import Fields from "./Fields";
import Header from "../header/Header";
import { useLocation, useNavigate } from "react-router-dom";

const ProductMain = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
              <button
                className="section-button-new"
                onClick={() => navigate("/inventory/product")}
              >
                <span> Save & publish </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Fields />
    </>
  );
};

export default ProductMain;
