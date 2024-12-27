import React, { useState } from "react";
import { SignIn } from "./SignIn/SignIn";
import { SignUp } from "./SignUp/SignUp";
import "./User.css";

export const User = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="user">
      {login ? <SignIn setLogin={setLogin}/> : <SignUp/>}
    </div>
  )
};
