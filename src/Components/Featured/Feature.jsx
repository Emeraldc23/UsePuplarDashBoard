import { useState, useEffect } from "react";
import "./feature.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Feature = () => {
  const [value, setValue] = useState(0);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 700);

    return () => clearInterval(interval);
  }, []);
  // Reuseable arrow keys
  const keys = [KeyboardArrowDownIcon, KeyboardArrowUpIcon];
  const showKeys = keys.map((Key, index) => {
    return <Key key={index} />;
  });
  return (
    <div className="featured">
      <div className="top">
        <h2 className="title">Total Revenue</h2>
        <MoreVertOutlinedIcon fontSize="medium" className="icon" />
      </div>
      <div className="bottom">
        <div className="featuredCharts">
          <CircularProgressbar
            value={value}
            text={`${value}%`}
            strokeWidth={8.5}
            styles={buildStyles({
              textSize: "20px",
              pathColor: `#4caf50`,
              textColor: "green",
              trailColor: "#d6d6d6",
              pathTransitionDuration: 1,
            })}
          />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$ 1500.5k</p>
        <p className="desc">Previous transactions</p>

        <div className="amount_rating">
          <ul className="targets">
            <li className="list_amt">
              <p className="title">Target</p>
              <span
                className={`prices ${status === 1 ? "positive" : "negative"}`}
              >
                {showKeys[0]}$19.40k
              </span>
            </li>
            <li className="list_amt">
              <p className="title">Last Week</p>
              <span
                className={`prices ${status === 0 ? "positive" : "negative"}`}
              >
                {showKeys[1]} $60.45k
              </span>
            </li>
            <li className="list_amt">
              <p className="title">Last Month</p>
              <span
                className={`prices ${status === 1 ? "positive" : "negative"}`}
              >
                {showKeys[0]}$73.49k
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Feature;

{
  /* 
  import ChangingProgressProvider from "./ChangingProgressProvider";
  
  
  <ChangingProgressProvider
            values={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          >
            {(percentage) => (
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  pathTransitionDuration: 1,
                })}
              />
            )}
          </ChangingProgressProvider> */
}
