import "./deal.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import { DoneAllSharp } from "@material-ui/icons";
import img1 from "../../images/img2.jpg"
import img2 from '../../images/img5.jpg'
import img3 from '../../images/img6.jpg'
import img4 from '../../images/img7.jpg'
import img5 from '../../images/img8.jpg'

const Deals = () => {
 
  const rows = [
    {
      id: 1,
      destinationname: "Skardu",
      img: img1,
      briefdiscription : "Skardu, a scenic valley with blue water and high mountains", 
      discountamount: 10000,
      actualamount: 15000
    },
    {
      id: 2,
      destinationname: "Naran",
      img: img2,
      briefdiscription: "Naran is a medium sized town situated in upper kaghan valley",
      discountamount: 6000,
      actualamount: 8000
    },
    {
      id: 3,
      destinationname: "Kalam",
      img: img3,
      briefdiscription: "Kalam, a cool and pleasant hill station in Hindu Kush Range",
      discountamount: 7000,
      actualamount: 9000  
    },
    {
      id: 4,
      destinationname: "Shugran",
      img: img4,
      briefdiscription: "hill station situated on a plateau in the Kaghan Valley",
      discountamount: 6000,
      actualamount: 8500 
    },
    {
      id: 5,
      destinationname: "Hunza",
      img: img5,
      briefdiscription: "high peaks including Rakaposhi, Hunza Peak, BojahagurDuanasir II",
      discountamount: 7500,
      actualamount: 9000 
    },
  ];
  return (
    <TableContainer component={Paper} 
    className="table"
    >
      <Table
      sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Destination Name</TableCell>
            <TableCell className="tableCell">Brief Discription</TableCell>
            <TableCell className="tableCell">Actual Amount</TableCell>
            <TableCell className="tableCell">Discount Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow style={{ width: 10 }}>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Deals;