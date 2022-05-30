import { useState } from "react";
import Snackbar from "../Snackbar/index";
import { TextField, Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./deals.css";
import { UPLOADFILE } from "../../../services/httpClient";
import { Navigate } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

const AddNewDeals = () => {
  const initialValues = {
    briefdescription: "",
    actualamount: "",
    discountamount: "",
    phonenumber: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [Destination, setDestination] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  const [isloading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(false);
  const [snakbarMessage, setsnakbarMessage] = useState(false);

  const validate = (values) => {
    if (!values.actualamount.trim()) {
      setType("error");
      setsnakbarMessage("Actual Amount Required");
      setOpen(true);
    }
    if (!values.discountamount) {
      setType("error");
      setsnakbarMessage("Discount Amount is required!");
      setOpen(true);
    }
    if (!values.briefdescription) {
      setType("error");
      setsnakbarMessage("Brief Description is Required");
      setOpen(true);
    }
    if (!values.phonenumber) {
      setType("error");
      setsnakbarMessage("Phone Number is Required");
      setOpen(true);
    }else return true;
  };
  const create = async (formValues) => {
    if (!Destination) {
      setType("error");
      setsnakbarMessage("Select destination");
      setOpen(true);
    } else if (!Image) {
      setType("error");
      setsnakbarMessage("Select image");
      setOpen(true);
    } 
    else {
      formValues.destination = Destination;
      formValues.image = Image;
      setLoading(true);
      const formdata = new FormData();
      formdata.append("image", formValues.image);
      formdata.append("briefdescription", formValues.briefdescription);
      formdata.append("phonenumber", formValues.phonenumber);
      formdata.append("actualamount", formValues.actualamount);
      formdata.append("discountamount", formValues.discountamount);
      formdata.append("Destination", formValues.destination);
      let res = await UPLOADFILE("/agency", formdata);
      if (res?.code === 200) {
        setType("success");
        setOpen(true);
        setLoading(false);
        setsnakbarMessage(res?.message);
        setTimeout(() => {
          setSuccess(true);
        }, 1000);
      } else {
        setType("error");
        setOpen(true);
        setsnakbarMessage(res?.data.message);
        setLoading(false);
      }
    }
  };
  const [Image, setImage] = useState("");
  const [imgData, setImgData] = useState(null);
  const myHandler = (e) => {
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
            onChange={myHandler}
          />
          <div className="label">
            <label className="image-upload" htmlFor="input">
              Choose Advertisement
            </label>
          </div>
        </div>
        <div className="deals-content-right">
          <form onSubmit={handleSubmit} className="deals">
            <h1>Add New Deals</h1>
            <Box sx={{ width: 450, maxWidth: "100%" }}>
              <div className="deals-inputs">
                <TextField
                  label="Brief Description"
                  type="description"
                  fullWidth
                  name="briefdescription"
                  placeholder="Enter your Brief Description"
                  variant="standard"
                  value={formValues.briefdescription}
                  onChange={handleChange}
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
                  value={formValues.actualamount}
                  onChange={handleChange}
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
                  value={formValues.discountamount}
                  onChange={handleChange}
                />
              </div>
              <div className="deals-inputs">
              <TextField
                  label="Phone Number"
                  type="phonenumber"
                  fullWidth
                  name="phonenumber"
                  placeholder="Enter your Phone Number"
                  variant="standard"
                  value={formValues.phonenumber}
                  onChange={handleChange}
                />
              </div>
              <div className="deals-inputs">
                <FormControl
                  variant="standard"
                  sx={{ m: 1, width: 650, maxWidth: "90%" }}
                  onChange={handleChange}
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
              onClick={async () => {
                let validation = validate(formValues);
                if (validation) await create(formValues);
              }}
            >
              {isloading && <CircularProgress />}
              {!isloading && <span> Create </span>}
            </button>
          </form>
          {open && (
            <Snackbar
              open={open}
              setOpen={setOpen}
              type={type}
              message={snakbarMessage}
            />
          )}
        </div>
      </div>
      {success && <Navigate to={"/"} replace />}
    </div>
  );
};

export default AddNewDeals;
