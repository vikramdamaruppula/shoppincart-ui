import React from "react";
import Header from "../header/Header";

import "./index.css";
import ProductForm from "./Fields";
import ProductImage from "./ProductImage";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const navigate = useNavigate();
  return (
    <div>
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
                onClick={() => navigate("/inventory/product/item")}
              >
                <span> Save & publish </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <ProductImage />
    </div>
  );
};

export default NewProduct;
