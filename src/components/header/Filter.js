import React from "react";
import filter from "../../Assets/filter/filter.svg";
import calender from "../../Assets/filter/Calendar.svg";
import search from "../../Assets/filter/Search.svg";
import send from "../../Assets/filter/Send.svg";

import "./filter.css";
import ProductTable from "./Table";
const Filter = () => {
  return (
    <section className="filter-section">
      <div className="filter-background">
        <div className="filter-container">
          <div className="filter-left-container">
            <p className="filter-inventory-text" style={{ color: "#000" }}>
              Inventory Items
            </p>
          </div>
          <div className="filter-right-container">
            <img className="search-icon" src={search} alt="search" />
            <input className="input" placeholder="Search" type="search" />
            <button className="filter-button">
              <img className="filter-image" src={filter} alt="filter" />{" "}
              <span className="filter-">Filter</span>{" "}
            </button>
            <button className="filter-button">
              <img className="filter-" src={calender} alt="filter" />{" "}
              <span className="filter-">Filter</span>{" "}
            </button>
            <button className="filter-button">
              <img src={send} alt="filter" />{" "}
              <span className="filter-">Share</span>{" "}
            </button>
            <select className="select">
              <option> Bulk Action</option>
              <option> Bulk action</option>
              <option> bulk Action</option>
            </select>
          </div>
        </div>
        <ProductTable />
      </div>
    </section>
  );
};

export default Filter;
