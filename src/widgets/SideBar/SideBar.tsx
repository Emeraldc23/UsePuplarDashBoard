import { Link } from "react-router-dom";
import "../SideBar/sidebar.scss";
import sideBarData from "../../../data/data";
import pupularLogo from "../../assets/projectPic/PuplarLogo.png";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useRef } from "react";

interface SideBarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen, closeSidebar }) => {
  const sideBarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sideBarRef.current &&
        !sideBarRef.current.contains(event.target as Node)
      ) {
        closeSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeSidebar]);
  return (
    <main ref={sideBarRef} className={`sideBar ${isOpen ? "open" : ""}`}>
      {/* Close button ONLY for mobile */}

      <div className="top">
        <button className="closeBtn" onClick={closeSidebar}>
          <CloseIcon />
        </button>
        <Link to="/" className="logoImg">
          Puplar <img src={pupularLogo} alt="Logo" className="logo" />
        </Link>
      </div>

      <hr />

      <div className="bottom">
        {sideBarData.map((section) => (
          <div key={section.title}>
            <p className="title">{section.title}</p>
            <ul>
              {section.iconDetails.map((item) => {
                const Icon = item.icon;
                const path =
                  item.iconText.toLowerCase() === "dashboard"
                    ? "/"
                    : `${item.path}`;

                return (
                  <li key={item.iconText}>
                    <Link to={path} className="link" onClick={closeSidebar}>
                      <Icon className="icon" />
                      <span>{item.iconText}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
};

export default SideBar;
