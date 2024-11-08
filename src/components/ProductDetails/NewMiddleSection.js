import React from "react";
import bag from "../../Assets/sidebar/Bag.svg";
import cloth from "../../Assets/filter/imageCloth.svg";
import "./index.css";
const NewMiddleSection = () => {
  return (
    <section className="middle-section-main">
      {/* <div className="card-main-middle-top"> */}
      <div className="card-middle-main">
        <div className="card-image">
          <img className="image-cloth-middle" src={cloth} alt="icon" />
        </div>
        <div className="card-below-middle">
          <div className="left-content-middle">
            <p>
              last order <b>12 sep 2022</b>{" "}
            </p>
            <button className="published">Published</button>
          </div>
          <div className="left-content-bottom">
            <div className="left-content">
              <p classname="toggle-text">Price</p>
              <p classname="toggle-text">20</p>
            </div>
            <div className="left-content">
              <p classname="toggle-text">Instock</p>
              <p classname="toggle-text">20</p>
            </div>
          </div>
        </div>
        <div className="card-below-middle">
          <div className="left-content-middle">
            <img src={bag} alt="icon" />
            <select className="select-bigCards">
              <option>All-time</option>
              <option>All-time</option>
            </select>
          </div>
          <div className="left-content-bottom">
            <div className="left-content">
              <p classname="toggle-text">Total Orders</p>
              <p classname="toggle-text">N250000</p>
            </div>
            {/* <div className="left-content">
              <p>Total Orders</p>
              <p>N250000</p>
            </div> */}
          </div>
        </div>
        <div className="card-below-middle">
          <div className="left-content-middle">
            <img src={bag} alt="icon" />
            <select className="select-bigCards">
              <option>All-time</option>
              <option>All-time</option>
            </select>
          </div>
          <div className="left-content-bottom">
            <div className="left-content">
              <p classname="toggle-text">Total Orders</p>
              <p classname="toggle-text">N250000</p>
            </div>
            <div className="left-content">
              <p classname="toggle-text">Total Orders</p>
              <p classname="toggle-text">N250000</p>
            </div>
          </div>
          {/* </div> */}
        </div>

        {/* <div
          className="card-container"
          style={{ backgroundColor: "#fff", color: "#000" }}
        >
          <div className="card-select">
            <img src={bag} alt="icon" />
            <select className="select-bigCards">
              <option>All-time</option>
              <option>All-time</option>
            </select>
          </div>
          <div className="card-below">
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
        </div> */}
      </div>
    </section>
  );
};

export default NewMiddleSection;
