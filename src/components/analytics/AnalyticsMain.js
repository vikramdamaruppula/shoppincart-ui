import React from "react";
import Analytics from "./Analytics";
import "./index.css";
const AnalyticsMain = () => {
  return (
    <div className="analtyic-main">
      <h2 className="analtyic-text">Analytics Report</h2>
      <div className="analtyic-container">
        <Analytics />
        {/* <Analytics /> */}
      </div>
    </div>
  );
};

export default AnalyticsMain;
