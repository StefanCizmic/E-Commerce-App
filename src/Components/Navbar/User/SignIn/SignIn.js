import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SignIn.css";

export const SignIn = ({ setLogin }) => {
  return (
    <form className="sign-in">
      <h2>Sign In</h2>
      <div className="email-field">
        <TextField
          label="Email"
          variant="outlined"
          inputProps={{ style: { fontSize: 14 } }}
          InputLabelProps={{ style: { fontSize: 13.5 } }}
          sx={{
            '.MuiInputBase-input': { fontSize: '0.5rem' },
            width: {
              xs: "100%",
              sm: "300px",
            },
            fontSize: {
              xs: "12px",
              sm: "16px",
            },
            "& .MuiInputBase-root": {
              height: "40px",
            },
          }}
        />
      </div>
      <div className="password-field">
        <TextField
          label="Password"
          variant="outlined"
          inputProps={{ style: { fontSize: 14 } }}
          InputLabelProps={{ style: { fontSize: 13.5 } }}
          sx={{
            width: {
              xs: "100%",
              sm: "300px",
            },
            fontSize: {
              xs: "12px",
              sm: "16px",
            },
            "& .MuiInputBase-root": {
              height: "40px",
            },
          }}
        />
        <p className="password-forgotten">Forgot password?</p>
      </div>
      <Button
        variant="contained"
        sx={{
          width: { xs: "100%", md: "300px" },
          fontSize: {
            xs: "12px",
            sm: "16px",
          },
          fontFamily: "Playfair Display",
        }}
      >
        Sign In
      </Button>
      <p>
        Don't have an account? {""}
        <span className="sign-up-span" onClick={() => setLogin(false)}>
          Sign up
        </span>{" "}
        for free
      </p>
    </form>
  );
};