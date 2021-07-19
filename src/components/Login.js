import React from "react";
import { Button, TextField } from "@material-ui/core";

export default function Login() {
  return (
    <div>
      <TextField name="email" label="Standard" />
      <Button variant="outlined">Login</Button>
    </div>
  );
}
