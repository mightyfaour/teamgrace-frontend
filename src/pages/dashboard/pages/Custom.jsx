import React from "react";

import "./Pages.css";

const Custom = () => {
  return (
    <div className="custom">
      <div className="custom_heading">
        <h2 style={{ color: "darkgreen" }}>Custom Branding</h2>
        <p className="custom_p">
          Create themes with a custom logo, button colors, and company name{" "}
          <br />
          to use on your interviews.
        </p>
      </div>
      <div className="custom-logo">
        <div className="h">h</div>
        <div className="add_button">
          <p
            style={{
              fontSize: "1.5rem",
              color: "rgba(26, 163, 74, 1)",
              cursor: "pointer",
            }}
          >
            +
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(26, 163, 74, 1)",
              fontWeight: "bold",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Create new theme
          </p>
        </div>
      </div>
    </div>
  );
};

export default Custom;
