import React, {useState} from 'react';
import "./manage.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DeleteOutlined, EditOutlined } from '@mui/icons-material';
import {data} from "../mock-data"

const UserList = () => {

const[rows , setRows] = useState(data)

const handleDeleteClick = (rowId) => {
  const newRows = [...rows];

  const index = rows.findIndex((rows) => rows.id === rowId);

  newRows.splice(index, 1);

  setRows(newRows);
};

  return (
    <div className='home'>
    <div className='listContainer'>
    <TableContainer component={Paper} 
    className="managetable"
    >
      <Table sx={{ minWidth: 650 }}aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Destination Name</TableCell>
            <TableCell className="tableCell">Brief Discription</TableCell>
            <TableCell className="tableCell">Actual Amount</TableCell>
            <TableCell className="tableCell">Discount Amount</TableCell>
            <TableCell className="tableCell">Phone Number</TableCell>
            <TableCell className='tableCell'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.destinationname}
                </div>
              </TableCell>
              <TableCell className="tableCell1">{row.briefdiscription}</TableCell>
              <TableCell className="tableCell">{row.actualamount}</TableCell>
              <TableCell className="tableCell">{row.discountamount}</TableCell>
              <TableCell className="tableCell">{row.phonenumber}</TableCell>
              <TableCell className="tableCell">
                <button className = "editbtn">
                <EditOutlined />
                </button>
                <button className='deletebtn' onClick={() => handleDeleteClick(row.id)}>
                <DeleteOutlined />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
  );
};

export default UserList;