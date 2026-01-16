import "../ReusableWidgets/widget.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";

const Widget = ({ icon, data }) => {
  const [status, setStatus] = useState(0);
  const { title, rating, isCurrency, background, color } = data;
  const keys = [KeyboardArrowDownIcon, KeyboardArrowUpIcon];
  const showKeys = keys.map((Key, index) => {
    return <Key key={index} />;
  });
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{title}</span>
        <p className="counter">
          {isCurrency && "$"} {rating}
        </p>
        <a href="#" className="link">
          See details
        </a>
      </div>
      <div className="right">
        <div className={`percentage ${status === 1 ? "positive" : "negative"}`}>
          {showKeys[0]}
          <span>20%</span>
        </div>
        <div
          className="iconHolder"
          style={{ background: background, color: color }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default Widget;
