import React from "react";
import LeftContainer from "./LeftContainer";
import delete1 from "../../Assets/filter/delete.svg";
import cloth from "../../Assets/filter/imageCloth.svg";
import upload from "../../Assets/filter/upload.svg";

const ProductImage = () => {
  return (
    <section className="main-section">
      {/* ============== left container  */}
      <LeftContainer />
      {/* Right container =============== */}
      <div className="field-right-main">
        <div className="field-right">
          <p className="toggle-text">Additional Images</p>
          <div class="upload-box image-uploaded">
            <div className="delete-icon-container">
              <img src={delete1} alt="cloud" />
              <img src={upload} alt="cloud" />
            </div>
            <img className="t-shirt" src={cloth} alt="t-shirt" />
          </div>
          <p className="toggle-text"> Additional Images</p>
          <div className="bottom-upload-container">
            <div class="upload-bottom image-uploaded">
              <img src={cloth} className="t-shirt-bottom" alt="Upload Icon" />
              {/* <div>
                <img src={cloud} className="cloud-image" alt="cloud" />
                <span class="upload-text">Upload Image</span>
              </div> */}
              <input className="file-input" type="file" accept="image/*" />
            </div>
            <div class="upload-bottom upload-bottom-2"></div>
            {/* <div class="upload-bottom upload-bottom-2"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductImage;
