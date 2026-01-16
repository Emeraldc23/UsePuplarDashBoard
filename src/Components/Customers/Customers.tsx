import { useState, useEffect } from "react";
import "../Customers/customers.scss";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { searchItem } from "../SearchPage/Search";
import { CircularProgress, Box, Paper } from "@mui/material";

const API = "https://jsonplaceholder.typicode.com/users";

interface UserRow {
  id: number;
  user: string;
  email: string;
  age: string;
  city: string;
  status: string;
}
export default function Customers() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const { search } = searchItem();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function userData() {
      try {
        setIsLoading(true);
        const fetchData = await fetch(API);
        const data = await fetchData.json();
        console.log(data);

        const rows: UserRow[] = data.map((user: any) => ({
          id: user.id,
          user: user.name,
          email: user.email,
          age: user.phone,
          city: user.address?.city || "",
          status: user.website,
        }));
        setUser(rows);
      } catch (e) {
        console.error("Error coming from", e);
      } finally {
        setIsLoading(false);
      }
    }
    userData();
  }, []);

  const filteredUsers = user.filter((res) => {
    const result = search.toLowerCase();
    return (
      res.name?.toLowerCase().includes(result) ||
      res.address?.city?.toLowerCase().includes(result)
    );
  });
  const columns: GridColDef<UserRow>[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 220,

      renderCell: (params) => {
        console.log(params.row);
        return (
          <div className="userData">
            <p>{params.row.user}</p>
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "age",
      headerName: "Phone",
      type: "number",
      width: 120,
    },
    {
      field: "city",
      headerName: "City",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="btns">
            <Button
              className="view"
              onClick={() => navigate(`/customers/${params.row.id}`)}
            >
              View
            </Button>

            <Button className="delete" onClick={() => handleDel(params.row.id)}>
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  function handleDel(id: number) {
    const newData = user.filter((item) => item.id !== id);
    setUser(newData);
  }

  const paginationModel = { page: 0, pageSize: 10 };
  return (
    <main className="customers">
      <div className="customerContainer">
        <div className="customerHeading">
          <h2>Users</h2>

          <Link to="/customers/:customerId/new" className="btn">
            {" "}
            Add New
          </Link>
        </div>
        <div className="table">
          <Paper
            sx={{ height: 1000, width: "100%", fontSize: "40px" }}
            elevation={0}
          >
            {isLoading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 600,
                }}
              >
                <CircularProgress />
              </Box>
            ) : (
              <DataGrid
                rows={
                  search
                    ? filteredUsers.map((data, id) => ({
                        id: data.id,
                        user: data.name,
                        email: data.email,
                        age: data.phone,
                        city: data.address.city,
                        status: data.website,
                      }))
                    : user
                }
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[10, 20]}
                checkboxSelection
                sx={{
                  border: 0,
                  "& .MuiDataGrid-cell": {
                    padding: "8px",
                  },

                  "@media (max-width: 600px)": {
                    fontSize: "16px",

                    "& .MuiDataGrid-columnHeaders": {
                      fontSize: "25px",
                    },

                    "& .MuiDataGrid-row": {
                      minHeight: "60px !important",
                      fontSize: "23px",
                    },

                    "& .MuiDataGrid-cell": {
                      whiteSpace: "normal",
                      lineHeight: 2,
                    },
                  },
                }}
                className="mainTable"
              />
            )}
          </Paper>
        </div>
      </div>
    </main>
  );
}
