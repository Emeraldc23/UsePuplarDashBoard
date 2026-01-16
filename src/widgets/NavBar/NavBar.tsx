import { searchItem } from "../../Components/SearchPage/Search";
import "../NavBar/navbar.scss";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Switch from "@mui/material/Switch";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import profilepics from "../../assets/projectPic/profile_pics.jpg";
import { useContext } from "react";
import { DarkModeContext } from "../../Context/darkModeContext";

interface NavBarProps {
  openSidebar: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ openSidebar }) => {
  const { search, setSearch } = searchItem();
  const { dispatch } = useContext(DarkModeContext);

  return (
    <nav className="navBar">
      <div className="topLeftSection">
        {/* Dashboard Menu Icon (Mobile) */}
        <button
          className="dashboardMenuBtn"
          onClick={() => {
            openSidebar();
          }}
        >
          <DashboardIcon className="icon" />
        </button>

        <div className="searchTag">
          <input
            type="search"
            placeholder="search name or city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchOutlinedIcon />
        </div>
      </div>

      <div className="navbarIcons">
        <ul>
          <li>
            <Switch onClick={() => dispatch({ type: "TOGGLE" })} />
            <span>Theme</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon className="icon count" />
            <div className="counter">3</div>
          </li>
          <li>
            <ChatBubbleOutlineOutlinedIcon className="icon count" />
            <div className="counter">5</div>
          </li>
          <li>
            <div className="imageContainer">
              <img src={profilepics} alt="profile" />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
