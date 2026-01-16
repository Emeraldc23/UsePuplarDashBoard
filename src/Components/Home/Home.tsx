import NavBar from "../../widgets/NavBar/NavBar";
import SideBar from "../../widgets/SideBar/SideBar";
import "../Home/home.scss";
import Widget from "../ReusableWidgets/Widget";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import Chart from "../Chart/Chart";
import Feature from "../Featured/Feature";
import { useState } from "react";
const Home = ({ darkMode, setDarkMode }) => {
  const widgetInfo = [
    {
      title: "Customers",
      icon: Person3OutlinedIcon,
      rating: 100,
      background: "#ff000033",
      color: "crimson",
      isCurrency: false,
    },
    {
      title: "Orders",
      icon: ShoppingCartOutlinedIcon,
      rating: 100,
      background: "#daa52033",
      color: "goldenrod",
      isCurrency: false,
    },
    {
      title: "Total Earnings",
      icon: MonetizationOnOutlinedIcon,
      rating: "100",
      background: "#00800033",
      color: "green",
      isCurrency: true,
    },
    {
      title: "My balance",
      icon: AccountBalanceWalletOutlinedIcon,
      rating: "100",
      background: "#80008033",
      color: "purple",
      isCurrency: true,
    },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <div className="homeLayout">
      <div className="homeNavbar">
        <div className="widgets">
          {widgetInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <Widget
                key={index}
                icon={<Icon className="icon" />}
                data={item}
              />
            );
          })}
        </div>
        <div className="charts">
          <Chart />
          <Feature />
        </div>
      </div>
    </div>
  );
};

export default Home;
