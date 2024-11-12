import React from "react";
import Header from "../header/Header";

import baggy from "../../Assets/filter/baggy.svg";
import Filter from "../header/Filter";
import NewMiddleSection from "./NewMiddleSection";

import "./index.css";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <section className="section-main">
        <div className="section-top">
          <div className="section-top">
            <div className="section-container">
              <div className="section-container section-gap">
                <p className="section-text">polo T-shirt</p>
                <p className="section-text">Date Added</p>
                <p className="section-text">12 sep 2023</p>
                <p className="section-text">12:55 pm</p>
              </div>
              <div className="button-container">
                <select className="select-new">
                  <option>Edit Product</option>
                  <option>Save for later</option>
                  <option>Save as Document</option>
                </select>
                <button
                  onClick={() => navigate("/analytics")}
                  className="section-button-new unpublish-text"
                >
                  <span> Unpublish product </span>
                </button>
              </div>
            </div>
          </div>
          <NewMiddleSection />
          {/* <div className="section-container">
            <p className="section-text">Inventory Summary</p>
            <button className="section-button">
              <img className="plus-icon" src={plus} alt="plus" />
              <span> Add New Product </span>
            </button>
          </div> */}
          {/* ===================  big cards  =============== */}
          <div className="card-main card-padding">
            <div className="card-container">
              <div className="card-select">
                <img src={baggy} alt="icon" />
                <select className="select-bigCards">
                  <option>All-time</option>
                  <option>All-time</option>
                </select>
              </div>
              <div className="card-select">
                <div className="left-content">
                  <p>All orders</p>
                  <p className="card-text">12</p>
                </div>
                <div className="left-content">
                  <p>Pending</p>
                  <p>01</p>
                </div>
                <div className="left-content">
                  <p>Completed</p>
                  <p>10</p>
                </div>
              </div>
            </div>

            <div
              className="card-container"
              style={{ backgroundColor: "#fff", color: "#000" }}
            >
              <div className="card-select">
                <img src={baggy} alt="icon" />
                <select className="select-bigCards">
                  <option>All-time</option>
                  <option>All-time</option>
                </select>
              </div>
              <div className="card-select">
                <div className="left-content">
                  <p>Cancelled</p>
                  <p>02</p>
                </div>
                <div className="left-content">
                  <p>Returned</p>
                  <p>05</p>
                </div>
                <div className="left-content">
                  <p>Damaged</p>
                  <p>01</p>
                </div>
              </div>
            </div>
          </div>
          <Filter />
          {/* <ProductTable /> */}
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
