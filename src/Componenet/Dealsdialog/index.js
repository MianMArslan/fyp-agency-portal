import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import "./dealDialog.css";

export default function FormDialog(props) {
  const { amount1, description1, discount1 } = props;
  const [open, setOpen] = React.useState(true);
  const [amount, setAmount] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [discount, setDiscount] = React.useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    console.log(amount);
    console.log(description);
    console.log(discount);
  };

  return (
    <div className="dialog">
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ color: "#fb9e00" }}>Edit</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            fullWidth
            type="text"
            variant="standard"
            value={description1}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="amount"
            label="Amount"
            fullWidth
            variant="standard"
            value={amount1}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="discount"
            label="Discount"
            fullWidth
            variant="standard"
            value={discount1}
            onChange={(e) => {
              setDiscount(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button style={{ color: "#fb9e00" }} onClick={handleClose}>
            Cancel
          </Button>
          <Button style={{ color: "#fb9e00" }} onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
