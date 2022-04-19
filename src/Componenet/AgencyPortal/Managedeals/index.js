import React, { useState, useEffect } from "react";
import "./manage.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DeleteOutlined, EditOutlined } from "@mui/icons-material";
import { GET, DELETE } from "../../../services/httpClient";
import ActivityLoader from "../../ActivityLoader/index";
import Snackbar from "../Snackbar/index";
import Box from "@mui/material/Box";

import Dialog from "../../Dealsdialog/index";
const UserList = () => {
  const [rows, setRows] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [data, setData] = useState(null);

  const handleDeleteClick = async (rowId) => {
    const newRows = [...rows];
    const index = rows.findIndex((rows) => rows.id === rowId);
    newRows.splice(index, 1);
    setRows(newRows);
    let res = await DELETE(`/agency/${rowId}`);
    if (res.code == 200) {
      setType("success");
      setOpen(true);
      setLoading(false);
      setSnackbarMessage(res?.message);
    } else {
      setType("error");
      setOpen(true);
      setSnackbarMessage(res?.data.message);
      setLoading(false);
    }
  };

  const handleUpdateClick = async (row) => {
    setData(row);
    setOpenDialog(true);
  };
  async function getRecord() {
    setLoading(true);
    let rows = await GET("/agency");
    if (rows) {
      setTimeout(function () {
        setRows(rows);
        setLoading(false);
      }, 3000);
    }
  }

  useEffect(() => {
    getRecord();
  }, []);

  return (
    <div className="home">
      <div className="listContainer">
        <TableContainer component={Paper} className="managetable">
          {isLoading && <ActivityLoader />}
          <Table
            // sx={{ minWidth: 650, minHeight: 200 }}
            style={{ width: "700px" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">ID</TableCell>
                <TableCell className="tableCell">Destination</TableCell>
                <TableCell className="tableCell">Description</TableCell>
                <TableCell className="tableCell">Amount</TableCell>
                <TableCell className="tableCell">Discount</TableCell>
                <TableCell className="tableCell">Phone</TableCell>
                <TableCell className="tableCell">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
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
                  <TableCell className="tableCell">{row.amount}</TableCell>
                  <TableCell className="tableCell">{row.discount}</TableCell>
                  <TableCell className="tableCell">{row.phone}</TableCell>
                  <TableCell className="tableCell">
                    <button
                      className="editbtn"
                      onClick={() => handleUpdateClick(row)}
                    >
                      <EditOutlined />
                    </button>
                    <button
                      className="deletebtn"
                      onClick={() => handleDeleteClick(row.id)}
                    >
                      <DeleteOutlined />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {open && (
          <Snackbar
            open={open}
            setOpen={setOpen}
            type={type}
            message={snackbarMessage}
          />
        )}
        {openDialog && (
          <Dialog
            setOpenDialog={setOpenDialog}
            getRecord={getRecord}
            dialogData={data}
          />
        )}
      </div>
    </div>
  );
};

export default UserList;
