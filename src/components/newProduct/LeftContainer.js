import React, { useState } from "react";
import calender from "../../Assets/filter/Calendar.svg";
import clock from "../../Assets/filter/clock.svg";
import { Switch } from "@mui/material";

const LeftContainer = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);

  const [isChecked2, setIsChecked2] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  const handleToggle1 = () => {
    setIsChecked1(!isChecked1);
  };
  const handleToggle2 = () => {
    setIsChecked2(!isChecked2);
  };
  return (
    <section className="left-main-section">
      <div className="field-left-main">
        {/* section left ======================= */}
        <div className="field-left">
          <input placeholder="Product Name" className="field-input" />
          <select className="field-input">
            <option>Select Product Category</option>
            <option>Save for later</option>
            <option>Save as Document</option>
          </select>
          <div className="num-input-container">
            <input
              type="number"
              placeholder="Product Name"
              className="field-num-input"
            />
            <input
              type="number"
              placeholder="Product Name"
              className="field-num-input"
            />
          </div>
          <select className="field-input">
            <option>Order Type</option>
            <option>Save for later</option>
            <option>Save as Document</option>
          </select>
          <div className="toggle-main-container">
            <p className="toggle-text">Expiry Date</p>
            <div className="toggle-container">
              <p className="toggle-text">Add Expiry Date</p>
              <Switch
                checked={isChecked}
                onChange={handleToggle}
                color="primary"
              />
            </div>
          </div>
          <div className="toggle-main-container">
            <p className="toggle-text">Discount</p>
            <div className="toggle-container">
              <p className="toggle-text">Add Discount</p>
              <Switch
                checked={isChecked1}
                onChange={handleToggle1}
                color="primary"
              />
            </div>
          </div>
        </div>

        {/* section right ============== */}
        <div className="field-right">
          <textarea placeholder="Short description" className="text-area" />
          <p className="long-text"> Product Long Description</p>
          <textarea placeholder="Your Text Goes Here" className="text-area" />
          <p className="long-text"> Add a long description for your product</p>
          <div className="toggle-main-container">
            <p className="toggle-text">Return Policy</p>
            <div className="toggle-container">
              <p className="toggle-text">Add Discount</p>
              <Switch
                checked={isChecked2}
                onChange={handleToggle2}
                color="primary"
              />
            </div>
          </div>
          <p className="toggle-text"> Date Added</p>
          <div className="button-container-clock">
            <button className="clock-button">
              <img className="clock" src={calender} alt="calendar" />{" "}
              <span> 12/12/2024 </span>
            </button>
            <button className="clock-button">
              <img className="clock" src={clock} alt="clock" /> 12:00 pm
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftContainer;
