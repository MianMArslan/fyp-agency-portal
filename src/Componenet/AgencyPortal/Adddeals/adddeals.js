import React,{useState}from "react";
import "./adddeals.css";
import { TextField, Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Snackbar from "../Snackbar";

 const NewDeals = () => {
  const Values = {
    briefdescription: "",
    discountamount: "",
    actualamount: "",
  };
  const [formValues, setFormValues] = useState(Values);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [Destination, setDestination] = useState("");
  
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(false);
  const [snakbarMessage, setsnakbarMessage] = useState(false);

  const validate = (values) => {
  // if (!values.briefdescription) {
  //   setType("error");
  //   setsnakbarMessage("Brief description required");
  //   setOpen(true);
  // } else if (!/^[A-Za-z]+/(values.briefdescription.trim())) {
  //   setType("error");
  //   setsnakbarMessage("Enter a valid Brief description");
  //   setOpen(true);
  // }
  if (!values.actualamount) {
    setType("error");
    setsnakbarMessage("Actual Amount is required");
    setOpen(true);
  }
    if (!values.discountamount) {
      setType("error");
      setsnakbarMessage("Discount Amount is required");
      setOpen(true);
    }
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  const create = async (formValues) => {
    if (!Destination) {
      setType("error");
      setsnakbarMessage("select destination name");
      setOpen(true);
    } else {
      formValues.destination = Destination;
    }
  }

  const [selectedField , setSelectedField] = useState("")

  const myHandler = (e) => {
       setSelectedField(e.target.files[0])
   }

 const submitHandler= (e)=>{
       e.preventDefault()
       // var url = "/auth/registration";
       // const formdata = new FormData();
       // formdata.append('myFile', selectedField, setSelectedField.name);
       // formdata.append('name', 'image')
       // let response = axios.post(url, formdata)
       console.log(setSelectedField)
 }

  return (
    <div className="newDeal">
      <h1 className="addDealsTitle">New Deals</h1>
        <div className="addDealsimgright">
          <label className="addDealsright">Destination Image</label>
          <input  className = "img " type= "file" name="myFile" onChange={myHandler} />
        </div>
        <div className="addDealsleft">
      <form onSubmit={handleSubmit} className="addDealsForm">
        <Box sx={{ width: 650, maxWidth: "100%" }}>
        <FormControl
              variant="standard"
              sx={{ m: 1, width: 360, maxWidth: "90%" }}
              onChange={handleChange}
            >
              <InputLabel id="demo-simple-select-standard-label">
                --Destination Name--
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={Destination}
                onChange={(e) => setDestination(e.target.value)}
                label="Destination"
              >
                <MenuItem value="">
                  <em>Select Destination Name</em>
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
            
              <div className="addDealsItem">
              <TextField
                label="Actual Amount"
                type="amount"
                fullWidth
                name="actualamount"
                placeholder="Enter the Actual amount"
                variant="standard"
                value={formValues.actualamount}
                onChange={handleChange}
              />
              </div>
              <div className="addDealsItem">
              <TextField
                label="Discount Amount"
                type="Amount"
                fullWidth
                name="discountamount"
                placeholder="Enter the discount amount"
                variant="standard"
                value={formValues.discountamount}
                onChange={handleChange}
              />
              </div>
              <div className="addDealsItem">
              <TextField
                label="Brief Description"
                type="description"
                fullWidth
                name="Description"
                placeholder="Enter the Brief Description"
                variant="standard"
                // value={formValues.briefdescription}
                onChange={handleChange}
              />
              </div>
              </Box>
        <button className="addDealsButton"
        value= "Upload"
        onClick = {async () => {
          let validation = validate(formValues);
          if (validation) await create(formValues);
        }}
        >Create</button>
        {open && (
            <Snackbar
              open={open}
              setOpen={setOpen}
              type={type}
              message={snakbarMessage}
            />
          )}
      </form>
      </div>
    </div>
  );
}
export default NewDeals;