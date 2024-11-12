import React, { useState } from "react";
import calender from "../../Assets/filter/Calendar.svg";
import clock from "../../Assets/filter/clock.svg";
import { Switch } from "@mui/material";

const LeftContainer = (props) => {
  const { click } = props;
  const [formValues, setFormValues] = useState({
    productName: "",
    productCategory: "Select Product Category",
    quantiy1: "",
    quantiy2: "",
    orderType: "ordertype",
    expirydate: false,
    addDiscount: false,
  });

  // console.log(formValues);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues !== "") {
      console.log(formValues);
    }
  };
  return (
    <section className="left-main-section">
      <div className="field-left-main">
        {/* section left ======================= */}
        <form onSubmit={handleSubmit}>
          <div className="field-left">
            <input
              name="productName"
              value={formValues.productName}
              onChange={handleChange}
              placeholder="Product Name"
              className="field-input"
              required
            />
            <select
              name="productCategory"
              onChange={handleChange}
              value={formValues.productCategory}
              className="field-input"
            >
              <option>Select Product Category</option>
              <option>Save for later</option>
              <option>Save as Document</option>
            </select>
            <div className="num-input-container">
              <input
                type="number"
                placeholder="Product Name"
                className="field-num-input"
                name="quantiy1"
                value={formValues.quantiy1}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                placeholder="Product Name"
                className="field-num-input"
                name="quantiy2"
                value={formValues.quantiy2}
                onChange={handleChange}
                required
              />
            </div>
            <select
              name="orderType"
              value={formValues.orderType}
              className="field-input"
              onChange={handleChange}
            >
              <option value="ordertype">Order Type</option>
              <option value="savefor">Save for later</option>
              <option value="savefordocs">Save as Document</option>
            </select>
            <div className="toggle-main-container">
              <p className="toggle-text">Expiry Date</p>
              <div className="toggle-container">
                <p className="toggle-text">Add Expiry Date</p>
                <Switch
                  name="expirydate"
                  value={formValues.expirydate}
                  color="primary"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="toggle-main-container">
              <p className="toggle-text">Discount</p>
              <div className="toggle-container">
                <p className="toggle-text">Add Discount</p>
                <Switch
                  name="addDiscount"
                  value={formValues.addDiscount}
                  onChange={handleChange}
                  color="primary"
                />
              </div>
            </div>
            <div>
              <button className="section-button-new" type="submit">
                {" "}
                Submit Details
              </button>
            </div>
          </div>
        </form>

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
                // checked={isChecked2}
                // onChange={handleToggle2}
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
