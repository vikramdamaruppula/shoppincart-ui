import React from "react";
import icon from "../../Assets/sidebar/icon.svg";
import icon1 from "../../Assets/sidebar/icon1.svg";
import plus from "../../Assets/sidebar/plus.svg";

import "./container.css";
import { useNavigate } from "react-router-dom";
const Containers = () => {
  const navigate = useNavigate();

  const handleNewProduct = () => {
    navigate("/inventory/Newinventory");
  };
  const handleBack = () => {
    navigate("/login");
  };
  return (
    <section className="section-main">
      <div className="section-top">
        <div className="section-container">
          <p className="section-text">Inventory Summary</p>
          <button onClick={handleNewProduct} className="section-button">
            <img className="plus-icon" src={plus} />
            <span> Add New Product </span>
          </button>
          <button onClick={handleBack} className="section-button">
            <img className="plus-icon" src={plus} />
            <span> Go Back Login </span>
          </button>
        </div>
        {/* ===================  big cards  =============== */}
        <div className="card-main">
          <div
            style={{ backgroundColor: "#5570F1" }}
            className="card-container"
          >
            <div className="card-">
              <img src={icon1} alt="icon" />
            </div>
            <div className="card-below">
              <div className="left-content">
                <p>All Products</p>
                <p className="card-text">350</p>
              </div>
              <div className="left-content">
                <p>Active</p>
                <p>316</p>
              </div>
            </div>
          </div>

          <div
            className="card-container"
            style={{ backgroundColor: "#fff", color: "#000" }}
          >
            <div className="card-">
              <img src={icon} alt="icon" />
            </div>
            <div className="card-below">
              <div className="left-content">
                <p>Low Stock Alert</p>
                <p>350</p>
              </div>
              <div className="left-content">
                <p>Expired</p>
                <p>316</p>
              </div>
              <div className="left-content">
                <p>1 Star Rating</p>
                <p>316</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Containers;
