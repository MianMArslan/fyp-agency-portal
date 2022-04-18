import React, { useState, useEffect } from "react";
import "./deal.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@material-ui/core/CircularProgress";
import { GET } from "../../../services/httpClient";
const Deals = () => {
  const [isloading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function getRecord() {
      let rows = await GET("/agency");
      if (rows) {
        setRows(rows);
        setLoading(false);
      }
    }
    getRecord();
  }, []);
  return (
    <div className="home">
      {isloading && <CircularProgress className= "spin"/>}
      <div className="listContainer">
        {!isloading && (
          <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="tableheader">ID</TableCell>
                  <TableCell className="tableheader">Destination</TableCell>
                  <TableCell className="tableheader">Description</TableCell>
                  <TableCell className="tableheader">Active</TableCell>
                  <TableCell className="tableheader">Amount</TableCell>
                  <TableCell className="tableheader">Discount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow>
                    <TableCell className="tableCell">{row.id}</TableCell>
                    <TableCell className="tableCell">
                      <div className="cellWrapper">
                        <img src={row.imageUrl} alt="" className="image" />
                        {row.destination}
                      </div>
                    </TableCell>
                    <TableCell className="tableCell1">
                      {row.description}
                    </TableCell>
                    <TableCell className="tableCell">
                      {row.active}
              <Checkbox className='checkbox' title = "Active Deal" />
                    </TableCell>
                    <TableCell className="tableCell">{row.amount}</TableCell>
                    <TableCell className="tableCell">{row.discount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
      </div>
  );
};

export default Deals;
