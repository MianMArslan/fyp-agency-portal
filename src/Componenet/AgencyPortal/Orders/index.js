import React, { useState, useEffect } from "react";
import "./orders.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { data } from "../mock-data";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
function Orders() {
  const [rows, setRow] = useState(data);
  return (
    <>
      <TableContainer>
        <Table
          // sx={{ minWidth: 650, minHeight: 200 }}
          style={{ width: "1000px" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "5%", padding: "5px" }}>ID</TableCell>
              <TableCell style={{ width: "10%", padding: "5px" }}>
                Destination
              </TableCell>
              <TableCell style={{ width: "10%", padding: "5px" }}>
                Description
              </TableCell>
              <TableCell style={{ width: "10%", padding: "5px" }}>
                Amount
              </TableCell>
              <TableCell style={{ width: "10%", padding: "5px" }}>
                Discount
              </TableCell>
              <TableCell style={{ width: "10%", padding: "5px" }}>
                Phone
              </TableCell>
              <TableCell style={{ width: "10%", padding: "5px" }}>
                Status
              </TableCell>
              <TableCell style={{ width: "10%", padding: "5px" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell style={{ width: "5%", padding: "5px" }}>
                  {row.id}
                </TableCell>
                <TableCell style={{ width: "10%", padding: "5px" }}></TableCell>
                <TableCell style={{ width: "10%", padding: "5px" }}>
                  {row.description}
                </TableCell>
                <TableCell style={{ width: "10%", padding: "5px" }}>
                  {row.amount}
                </TableCell>
                <TableCell style={{ width: "10%", padding: "5px" }}>
                  {row.discount}
                </TableCell>
                <TableCell style={{ width: "10%", padding: "5px" }}>
                  {row.phone}
                </TableCell>
                <TableCell
                  style={{ width: "10%", padding: "5px" }}
                  align="center"
                >
                  {/* {row.status === "Pending" && (
                    <div className="badge badgeBlue">
                      <p>{row.status}</p>
                    </div>
                  )}
                  {row.status === "Accept" && (
                    <div className="badge badgeYellow">
                      <p>{row.status}</p>
                    </div>
                  )}
                  {row.status === "Reject" && (
                    <div className="badge badgeRed">
                      <p>{row.status}</p>
                    </div>
                  )} */}
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
                <TableCell style={{ width: "10%", padding: "5px" }}>
                  <button className="editBtn" title="Accept" onClick={() => {}}>
                    <DoneIcon />
                  </button>
                  <button
                    className="deleteBtn"
                    title="Reject"
                    onClick={() => {}}
                  >
                    <CloseIcon />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Orders;
