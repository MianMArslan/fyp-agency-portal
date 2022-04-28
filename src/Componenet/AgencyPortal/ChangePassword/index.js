import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./password.css";
import Snackbar from "../Snackbar/index";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import CircularProgress from "@material-ui/core/CircularProgress";
import img1 from "../../images/off the beaten track.png";
import { POST } from "../../../services/httpClient";
const ChangePassword = () => {
  const initialValues = {
    oldpassword: "",
    newpassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

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
    if (!values.oldpassword) {
      setType("error");
      setsnakbarMessage("Old Password is required");
      setOpen(true);
    }
    if (!values.newpassword) {
      setType("error");
      setsnakbarMessage("New Password is required");
      setOpen(true);
    } else if (values.newpassword.length < 3) {
      setType("error");
      setsnakbarMessage("Password must be more than 3 characters");
      setOpen(true);
    } else return true;
  };
  const [state, setState] = useState(false);
  const toggleBtn = () => {
    setState((prevState) => !prevState);
  };

  const [password, setPassword] = useState(false);
  const toggleBtn1 = () => {
    setPassword((prevState) => !prevState);
  };

  const changePassword = async (formValues) => {
    setLoading(true);
    let res = await POST("/agency/changePassword", formValues);
    if (res?.code === 200) {
      setType("success");
      setOpen(true);
      setLoading(false);
      setFormValues(initialValues);
      setsnakbarMessage(res?.message);
    } else {
      setType("error");
      setOpen(true);
      setLoading(false);
      setsnakbarMessage(res?.data.message);
    }
  };

  return (
    <div className="password-container">
      <div className="password-content-left">
        <img className="password-img" alt="" src={img1} />
      </div>
      <div className="password-content-right">
        <form onSubmit={handleSubmit} className="password">
          <h1>Change Password</h1>
          <Box sx={{ m: 1, width: 650, maxWidth: "100%" }}>
            <div className="password-inputs">
              <TextField
                label="Old Password"
                type={password ? "text" : "password"}
                name="oldpassword"
                placeholder="Enter your Old Password"
                fullWidth
                variant="standard"
                value={formValues.oldpassword}
                onChange={handleChange}
              />
              <button className="password-btn" onClick={toggleBtn1}>
                {password ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
            <div className="password-inputs">
              <TextField
                label="New Password"
                type={state ? "text" : "password"}
                name="newpassword"
                placeholder="Enter your New Password"
                fullWidth
                variant="standard"
                value={formValues.newpassword}
                onChange={handleChange}
              />
              <button className="password-btn" onClick={toggleBtn}>
                {state ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
          </Box>
          <button
            className="password-input-btn"
            type="submit"
            onClick={async () => {
              let validation = validate(formValues);
              if (validation) await changePassword(formValues);
            }}
          >
            {isloading && <CircularProgress />}
            {!isloading && <span>Change Password</span>}
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
  );
};

export default ChangePassword;
