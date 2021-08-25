import React,{useState} from "react";
import { Button } from "react-bootstrap";
import { Container, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function Login() {

  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const history = useHistory()

  const login = () => {
    if(email && password) {
      history.push('/')
    } 
  }

  return (
    <div>
      <h2 style={{ marginTop: "10px" }}>Login</h2>
      <Container>
        <TextField style={{ marginTop: "20px" }} name="email" label="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
        <div />
        <TextField
          style={{ marginTop: "20px" }}
          name="password"
          label="Password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
        />
        <div />
        <Button onCLick={login} className="btn btn-dark mt-2 mb-5" variant="outlined">
          Login
        </Button>
      </Container>
    </div>
  );
}
