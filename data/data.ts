import DashboardIcon from "@mui/icons-material/Dashboard";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import InsertChartOutlinedOutlinedIcon from "@mui/icons-material/InsertChartOutlinedOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

interface IconDetail {
  icon: React.ElementType;
  iconText: string;
  path?: string;
}

interface SideBarSection {
  title: string;
  iconDetails: IconDetail[];
}

const sideBar: SideBarSection[] = [
  {
    title: "MAIN",
    iconDetails: [{ icon: DashboardIcon, iconText: "Dashboard", path: "/" }],
  },
  {
    title: "LISTS",
    iconDetails: [
      { icon: Person3OutlinedIcon, iconText: "Customers", path: "/customers" },
    ],
  },
  {
    title: "CHARTS",
    iconDetails: [
      {
        icon: InsertChartOutlinedOutlinedIcon,
        iconText: "Stats",
        path: "construction",
      },
      {
        icon: NotificationsActiveOutlinedIcon,
        iconText: "Notifications",
        path: "construction",
      },
    ],
  },
  {
    title: "USER INTERFACE",
    iconDetails: [
      {
        icon: ExitToAppOutlinedIcon,
        iconText: "Logout",
        path: "construction",
      },
    ],
  },
];

export default sideBar;
