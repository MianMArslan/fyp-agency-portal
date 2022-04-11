import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { DeleteOutlined, EditOutlined } from '@mui/icons-material';

const ReadOnlyRow = ({ row, handleEditClick, handleDeleteClick }) => {
  return (
     <TableRow>
     <TableCell className="tableCell">{row.id}</TableCell>
     <TableCell className="tableCell">
       <div className="cellWrapper">
         <img src={row.img} alt="" className="image" />
         {row.destinationname}
       </div>
     </TableCell>
     <TableCell className="tableCell">{row.briefdiscription}</TableCell>
     <TableCell className="tableCell">{row.actualamount}</TableCell>
     <TableCell className="tableCell">{row.discountamount}</TableCell>
     <TableCell className="tableCell">{row.phonenumber}</TableCell>
     <TableCell className="tableCell">
       <button onClick={(event) => handleEditClick(event, row)}>
         <a href='/EditDeals'>
       <EditOutlined />
       </a>
       </button>
       <button onClick={() => handleDeleteClick(row.id)}>
       <DeleteOutlined />
       </button>
     </TableCell>
   </TableRow>
  
  );
};

export default ReadOnlyRow;