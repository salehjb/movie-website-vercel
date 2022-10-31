import React from "react";
// Styles
import "./PageHeader.scss";
// Images
import background from "../../assets/footer-bg.jpg";

const PageHeader = (props) => {
  return (
    <div className="page-header" style={{ backgroundImage: `url(${background})` }}>
      <h2>{props.children}</h2>
    </div>
  );
};

export default PageHeader;
