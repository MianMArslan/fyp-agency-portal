import { useState } from "react";
import Snackbar from "../Snackbar/index";
import { TextField, Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./edit.css";
import {data} from "../mock-data"
const EditDeals = (editFormData, handleEditFormChange,
  handleCancelClick,handleEditFormSubmit) => {

const [Destination, setDestination] = useState("");

  const create = async (editFormData) => {
      editFormData.destination = Destination;
      editFormData.image = Image;
  }
  const [Image , setImage] = useState("")
    const [imgData, setImgData] = useState(null);
    const myHandler = e => {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          setImgData(reader.result);
        });
        reader.readAsDataURL(e.target.files[0]);
      }
    };

  return (
    <div className="deals-container">
      <div className="deals-content-left">
        <div className="container">
          <div className="img-holder">
            <img src={imgData} alt="" id="img" className="img" />
          </div>
          <input
            type="file"
            accept="image/*"
            name="imagefile"
            id="input"
            onChange={handleEditFormChange}
          />
          <div className="label">
            <label className="image-upload" htmlFor="input">
              Choose your Photo
            </label>
          </div>
        </div>
        <div className="deals-content-right">
          <form 
           className="deals">
            <h1>Edit Deals</h1>
            <Box sx={{ width: 450, maxWidth: "100%" }}>
              <div className="deals-inputs">
                <TextField
                  label="Brief Description"
                  type="description"
                  fullWidth
                  name="briefdescription"
                  placeholder="Enter your Brief Description"
                  variant="standard"
                  value={editFormData.briefdescription}
                  onChange={handleEditFormChange}
                />
              </div>
              <div className="deals-inputs">
                <TextField
                  label="Actual Amount"
                  type="amount"
                  fullWidth
                  name="actualamount"
                  placeholder="Enter your Actual Amount"
                  variant="standard"
                  value={editFormData.actualamount}
                  onChange={handleEditFormChange}
                />
              </div>
              <div className="deals-inputs">
                <TextField
                  label="Discount Amount"
                  type="amount"
                  fullWidth
                  name="discountamount"
                  placeholder="Enter your Discount Amount"
                  variant="standard"
                  value={editFormData.discountamount}
                  onChange={handleEditFormChange}
                />
              </div>
              <div className="deals-inputs">
                <TextField
                  label="Phone Number"
                  fullWidth
                  name="phonenumber"
                  placeholder="Enter your Phone Number"
                  variant="standard"
                  value={editFormData.phonenumber}
                  onChange={handleEditFormChange}
                />
              </div>
              <div className="deals-inputs">
                <FormControl
                  variant="standard"
                  sx={{ m: 1, width: 650, maxWidth: "90%" }}
                  onChange={handleEditFormChange}
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    --Choose your Destination--
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={Destination}
                    onChange={(e) => setDestination(e.target.value)}
                    label="Destination"
                  >
                    <MenuItem value="">
                      <em>--Choose your Destination--</em>
                    </MenuItem>
                    <MenuItem value="HUNZA">Hunza</MenuItem>
                    <MenuItem value="SAWAT">Sawat</MenuItem>
                    <MenuItem value="NARAN">Naran</MenuItem>
                    <MenuItem value="KASHMIR">Kashmir</MenuItem>
                    <MenuItem value="SKARDU">Skardu</MenuItem>
                    <MenuItem value="KALAM">Kalam</MenuItem>
                    <MenuItem value="ORMARA">Ormara</MenuItem>
                    <MenuItem value="SHUGRAN">Shugran</MenuItem>
                    <MenuItem value="KHANPUR">Khanpur</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </Box>
            <button
              className="deals-input-btn"
              type="submit" 
            >Save
            </button>
            <button
              className="deals-input-btn"
              type="submit" 
              onClick={handleCancelClick}
            ><a href = "/ManageDeals" style={{textDecoration: "none" , color: "white"}}>Cancel</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditDeals;
