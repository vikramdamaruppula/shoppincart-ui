import React from "react";

const NotFound = () => {
  return (
    <div>
      <div className="login-main" style={{ width: "40%" }}>
        <p
          className="toggle-text"
          style={{ fontSize: "28px", marginBottom: "24px" }}
        >
          Page Not Found
        </p>
        <img
          src="https://png.pngtree.com/png-vector/20210702/ourmid/pngtree-error-404-page-not-found-website-png-image_3545448.jpg"
          alt="not-found"
        />
      </div>
    </div>
  );
};

export default NotFound;
