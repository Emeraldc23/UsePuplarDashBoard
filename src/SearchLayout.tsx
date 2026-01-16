import { Outlet } from "react-router-dom";
import SearchProvider from "./Components/SearchPage/Search";
import NavBar from "./widgets/NavBar/NavBar";
import SideBar from "./widgets/SideBar/SideBar";
import { useState } from "react";
import "./layout.scss";

export const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <SearchProvider>
      <div className="layout">
        <SideBar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        <div className="mainContent">
          <NavBar openSidebar={openSidebar} />
          <Outlet />
        </div>
      </div>
    </SearchProvider>
  );
};

/* import { Outlet } from "react-router-dom";
import SearchProvider from "./Components/SearchPage/Search";
import NavBar from "./widgets/NavBar/NavBar";
import { useState } from "react";
import SideBar from "./widgets/SideBar/SideBar";

export const Layout: React.FC = () => {
  // setUp state to manage sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <SearchProvider>
      <div style={{ display: "none" }}>
        <SideBar
          isOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <NavBar />
      </div>
      <Outlet />
    </SearchProvider>
  );
};
 */
