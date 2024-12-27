import React, { useState } from "react";
import { auth } from "../../../../Config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SignUp.css";

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    emailRequired: false,
    existingEmail: false,
    invalidEmail: false,
    passwordRequired: false,
    weakPassword: false,
  });
  const navigate = useNavigate();

  const submit = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setError({
        emailRequired: false,
        existingEmail: false,
        invalidEmail: false,
        passwordRequired: false,
        weakPassword: false,
      });
      if (email === "") {
        setError((prev) => ({
          ...prev,
          emailRequired: true,
        }));
      } else if (error.code === "auth/email-already-in-use") {
        setError((prev) => ({
          ...prev,
          existingEmail: true,
        }));
      } else if (error.code === "auth/invalid-email") {
        setError((prev) => ({
          ...prev,
          invalidEmail: true,
        }));
      } else if (password === "") {
        setError((prev) => ({
          ...prev,
          passwordRequired: true,
        }));
      } else if (error.code === "auth/weak-password") {
        setError((prev) => ({
          ...prev,
          weakPassword: true,
        }));
      } else {
        console.log(error);
      }
    }
  };

  return (
    <form className="sign-up">
      <h2>Sign Up</h2>
      <div className="create-username">
        <TextField
          label="Enter username"
          variant="outlined"
          inputProps={{ style: { fontSize: 14 } }}
          InputLabelProps={{ style: { fontSize: 13.5 } }}
          sx={{
            width: {
              xs: "100%",
              sm: "300px",
            },
            "& .MuiInputBase-root": {
              height: "40px",
            },
          }}
        />
      </div>
      <div className="enter-email">
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          label="Enter email"
          variant="outlined"
          inputProps={{ style: { fontSize: 14 } }}
          InputLabelProps={{ style: { fontSize: 13.5 } }}
          sx={{
            width: {
              xs: "100%",
              sm: "300px",
            },
            "& .MuiInputBase-root": {
              height: "40px",
            },
          }}
          error={
            error.emailRequired || error.existingEmail || error.invalidEmail
          }
          helperText={
            error.emailRequired
              ? "Email is required"
              : error.existingEmail
              ? "Email already exists"
              : error.invalidEmail
              ? "Invalid email format"
              : ""
          }
        />
      </div>
      <div className="create-password">
        <TextField
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          label="Enter password"
          variant="outlined"
          inputProps={{ style: { fontSize: 14 } }}
          InputLabelProps={{ style: { fontSize: 13.5 } }}
          sx={{
            fontSize: "5px",
            width: {
              xs: "100%",
              sm: "300px",
            },
            "& .MuiInputBase-root": {
              height: "40px",
            },
          }}
          error={error.passwordRequired || error.weakPassword}
          helperText={
            error.passwordRequired
              ? "Password is required"
              : error.weakPassword
              ? "Weak password"
              : ""
          }
        />
      </div>
      <Button
        className="sign-up-button"
        variant="contained"
        sx={{
          width: { xs: "100%", sm: "300px" },
          fontSize: {
            xs: "12px",
            sm: "16px",
          },
          fontFamily: "Playfair Display",
          marginTop: "20px",
        }}
        onClick={() => {
          submit();
        }}
      >
        Submit
      </Button>
    </form>
  );
};
