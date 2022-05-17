import React, { useState, useEffect } from "react";
import "./orders.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import tz from "moment-timezone";
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/react";
import ViewAdDetail from "../ViewAdDetail/index";
import { GET, POST } from "../../../services/httpClient";
import Snackbar from "../Snackbar/index";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Orders() {
  const [rows, setRow] = useState([]);
  const [data, setData] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState(false);

  const getBooking = async () => {
    let res = await GET("/agency/orders");
    if (res) {
      setRow(res);
      setLoading(false);
    }
  };
  const updateBookingStatus = async (data) => {
    let res = await POST("/agency/orderStatus", data);
    if (res?.code === 200) {
      setType("success");
      setOpen(true);
      setSnackbarMessage(res?.message);
    } else {
      setType("error");
      setOpen(true);
      setSnackbarMessage(res?.data.message);
    }
    await getBooking();
  };
  useEffect(() => {
    setTimeout(async () => {
      await getBooking();
    }, 3000);
  }, []);
  return (
    <>
      <TableContainer>
        <Table style={{ width: "1000px" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "5%", padding: "5px" }}>ID</TableCell>
              <TableCell style={{ width: "10%", padding: "5px" }}>
                Name
              </TableCell>
              <TableCell style={{ width: "10%", padding: "5px" }}>
                Description
              </TableCell>
              <TableCell style={{ width: "10%", padding: "5px" }}>
                Phone
              </TableCell>
              <TableCell style={{ width: "10%", padding: "5px" }}>
                Request Date
              </TableCell>
              <TableCell style={{ width: "10%", padding: "5px" }}>
                View Ad
              </TableCell>
              <TableCell style={{ width: "10%", padding: "5px" }}>
                Status
              </TableCell>
              <TableCell style={{ width: "10%", padding: "5px" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          {!loading && (
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell style={{ width: "5%", padding: "5px" }}>
                    {row.id}
                  </TableCell>
                  <TableCell style={{ width: "5%", padding: "5px" }}>
                    {row.name}
                  </TableCell>
                  <TableCell style={{ width: "10%", padding: "5px" }}>
                    {row.description}
                  </TableCell>
                  <TableCell style={{ width: "10%", padding: "5px" }}>
                    {row.phone}
                  </TableCell>
                  <TableCell style={{ width: "10%", padding: "5px" }}>
                    {tz(row.createdAt).format("MMM Do YY")}
                  </TableCell>
                  <TableCell style={{ width: "10%", padding: "5px" }}>
                    <Button
                      variant="outlined"
                      color="warning"
                      onClick={() => {
                        setData(row.ad);
                        setOpenDialog(true);
                      }}
                    >
                      View
                    </Button>
                  </TableCell>
                  <TableCell style={{ width: "10%", padding: "5px" }}>
                    <span className={`status ${row.status}`}>{row.status}</span>
                  </TableCell>
                  <TableCell style={{ width: "10%", padding: "5px" }}>
                    <button
                      className="editBtn"
                      title="Accept"
                      disabled={
                        row.status === "accept" || row.status === "reject"
                      }
                      onClick={() => {
                        row.status = "accept";
                        updateBookingStatus(row);
                      }}
                    >
                      <DoneIcon />
                    </button>
                    <button
                      className="deleteBtn"
                      title="Reject"
                      disabled={
                        row.status === "accept" || row.status === "reject"
                      }
                      onClick={() => {
                        row.status = "reject";
                        updateBookingStatus(row);
                      }}
                    >
                      <CloseIcon />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      {loading && (
        <Box
          style={{
            height: "500px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RingLoader color={"#fb9e00"} css={override} loading={loading} />
        </Box>
      )}
      {openDialog && (
        <ViewAdDetail dialogData={data} updateState={setOpenDialog} />
      )}
      {open && (
        <Snackbar
          open={open}
          setOpen={setOpen}
          type={type}
          message={snackbarMessage}
        />
      )}
    </>
  );
}

export default Orders;
