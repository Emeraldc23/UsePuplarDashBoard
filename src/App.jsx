import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Customers from "./Components/Customers/Customers";
import NewPage from "./Components/NewPage/NewPage";
import SinglePage from "./Components/SinglePage/SinglePage";
import Login from "./Components/Login/Login";
import { Layout } from "./SearchLayout";
import { newUserForm } from "../data/newFormData";
import UnderConstruction from "./underConstruction/UnderConstruction";
import { useContext } from "react";
import "./styles/darkMode.scss";
import { DarkModeContext } from "./Context/darkModeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "customers", element: <Customers /> },
      { path: "customers/:id", element: <SinglePage /> },
      {
        path: "customers/:customerId/new",
        element: <NewPage newInputs={newUserForm} title="Add New User" />,
      },
    ],
  },
  { path: "/construction", element: <UnderConstruction /> },
  { path: "/login", element: <Login /> },
]);
function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
{
  /* <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <RouterProvider router={router} />
      </div>
    </ThemeProvider> 
    
    className={darkMode ? "app dark" : "app"}
    */
}
