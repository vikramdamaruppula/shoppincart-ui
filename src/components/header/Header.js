import React, { useState } from "react";
import notification from "../../Assets/sidebar/Notification.svg";
import Avatar from "../../Assets/sidebar/profile.svg";
import arrow from "../../Assets/sidebar/arrow.svg";
import home from "../../Assets/sidebar/Home.svg";

import { MenuItem, FormControl, Select } from "@mui/material";
import { styled } from "@mui/system";
import "./index.css";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  console.log(path, "path");
  const [selectedShop, setSelectedShop] = useState("nannysShop");

  const handleChange = (event) => {
    setSelectedShop(event.target.value);
  };

  const CustomFormControl = styled(FormControl)({
    backgroundColor: "#FFF4E6",
    borderRadius: "4px",
  });

  const CustomArrowIcon = (props) => (
    <img {...props} src={arrow} alt="dropdown arrow" />
  );

  const CustomSelect = styled(Select)({
    "& .MuiSelect-select": {
      padding: "10px 14px",
    },
  });

  return (
    <>
      <header className="header-main">
        <div className="header-container">
          <div className="inventory">
            <h5 sclassName="inventory-text">Inventory </h5>
          </div>
          <div className="dropdown">
            <CustomFormControl
              variant="outlined"
              fullWidth
              className="single-select"
              minWidth={{ md: "200px" }}
              // sx={{md: minWidth: 200 }}
            >
              <CustomSelect
                id="shop-select"
                value={selectedShop}
                onChange={handleChange}
                displayEmpty
                IconComponent={CustomArrowIcon}
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none", // Remove the border
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "none", // Ensure no border on hover
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "none", // Ensure no border on focus
                  },
                  "& .MuiInputBase-root": {
                    outline: "none", // Remove the outline
                  },
                }}
              >
                <MenuItem value="nannysShop">Nanny's Shop</MenuItem>
                <MenuItem value="harisShop">Hari's Shop</MenuItem>
                <MenuItem value="otherShop">Other Shop</MenuItem>
              </CustomSelect>
            </CustomFormControl>
            <img
              className="notification"
              src={notification}
              alt="notification"
            />
            <img className="avatar" src={Avatar} alt="avatar" />
          </div>
        </div>
        <hr className="horizontal-line" />
        <div className="crums-container">
          <img className="home" src={home} alt="home" />
          {path === "/" ? (
            <span className="bread-crum"> / Inventory </span>
          ) : (
            <span className="bread-crum">{location.pathname}</span>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
