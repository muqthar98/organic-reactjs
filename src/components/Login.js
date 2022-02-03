import React,{useState} from "react";
import { Button } from "react-bootstrap";
import { Container, TextField } from "@material-ui/core";
import { useHistory,Link } from "react-router-dom";
import './Login.css'

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
      <h2 style={{ marginTop: "10px",marginBottom:'20px' }}>Login</h2>
      <Container>
      <TextField name="email" label="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <div />
        <TextField
          style={{ marginTop: "20px" }}
          name="password"
          label="Password"  
          value={password}
          onChange={e=>setPassword(e.target.value)}
        />
        <div>
        <Button onClick={login} className="btn btn-dark mt-3" style={{marginTop:'-10px'}} variant="outlined">
          Login
        </Button>
        <p>or</p>
        </div>
        <div>
        <p style={{marginTop:"-15px"}}>Create a new account</p>
        <Link to="/signup"><Button className="btn btn-dark mb-2">SignUp</Button></Link>
        </div>
      </Container>
    </div>
  );
}
