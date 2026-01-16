import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import rows from "../../../data/recentTransaction";
import "./transaction.scss";

const Transaction = () => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
          className="table"
        >
          <TableHead>
            <TableRow className="tableRow">
              <TableCell className="tableCell">Tracking ID</TableCell>
              <TableCell className="tableCell">Product</TableCell>
              <TableCell className="tableCell">Customers</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Amount</TableCell>
              <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="tbody">
            {rows.map((prod) => (
              <TableRow key={prod.id} className="tRow">
                <TableCell className="tableCell">{prod.id}</TableCell>
                <TableCell className="tableCell">
                  <div className="products">
                    <img
                      src={prod.image}
                      alt=""
                      width={50}
                      height={50}
                      className="prodImage"
                    />
                    <span>{prod.product}</span>
                  </div>
                </TableCell>
                {/*   <TableCell className="tableCell">{prod.category}</TableCell> */}
                <TableCell className="tableCell">{prod.customer}</TableCell>
                <TableCell className="tableCell">{prod.date}</TableCell>
                <TableCell className="tableCell">{prod.price}</TableCell>
                <TableCell className="tableCell">{prod.method}</TableCell>
                <TableCell className="tableCell">
                  <span className={` Status ${prod.status}`}>
                    {prod.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Transaction;
