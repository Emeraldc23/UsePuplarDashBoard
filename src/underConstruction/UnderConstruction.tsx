import React from "react";
import "./underConstruction.scss";
import ConstructionIcon from "@mui/icons-material/Construction";

const UnderConstruction: React.FC = () => {
  return (
    <div className="underConstructionContainer">
      <div className="content">
        <ConstructionIcon className="icon" />
        <h1>We're Building Something New!</h1>
        <p>
          This page is currently under construction. We're working hard to bring
          you a better experience. Please check back soon!
        </p>
        <p className="tip">
          Tip: You can explore other sections of our dashboard in the meantime.
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;
