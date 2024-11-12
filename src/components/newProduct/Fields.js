import React from "react";

import image from "../../Assets/filter/Image.svg";
import cloud from "../../Assets/filter/cloud.svg";
import LeftContainer from "./LeftContainer";
import "./field.css";

const Fields = (props) => {
  const { click } = props;
  return (
    <section className="main-section">
      {/* ============== left container  */}
      <LeftContainer click={click} />
      {/* Right container =============== */}
      <div className="field-right-main">
        <div className="field-right">
          <div class="upload-box">
            <img src={image} alt="Upload Icon" />
            <div>
              <img src={cloud} className="cloud-image" alt="cloud" />
              <span class="upload-text">Upload Image</span>
            </div>
            <p class="upload-info">
              Upload a cover image for your product.
              {/* <br /> */}
              File Format <b> jpeg, png </b> Recommended Size{" "}
              <b> 600×600 (1:1) </b>
            </p>
            <input className="file-input" type="file" accept="image/*" />
          </div>
          <p className="toggle-text"> Additional Images</p>
          <div className="bottom-upload-container">
            <div class="upload-bottom">
              <img src={image} alt="Upload Icon" />
              <div>
                <img src={cloud} className="cloud-image" alt="cloud" />
                <span class="upload-text">Upload Image</span>
              </div>
              <input className="file-input" type="file" accept="image/*" />
            </div>
            <div class="upload-bottom upload-bottom-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fields;
