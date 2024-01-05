import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";
import { Button } from "reactstrap";
import styles from "./Login.css";
import { Container } from "reactstrap";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleToggleClick = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  const inputStyle = {
    width: '630px'
  };
  return (
    <Container>
      <form>
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h2>Login</h2>
<br/>
        <InputControl
        required
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <br/>
        <InputControl
        required
          label="Password"
          type={showPassword ? 'text' : 'password'}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />
<br/>
        <Button type="button" onClick={handleToggleClick}>
          {showPassword ? 'Hide Password' : 'Show Password'}
        </Button>
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          
          <Button disabled={submitButtonDisabled} onClick={handleSubmission} style={inputStyle}>
            Login
          </Button>
          <p>
            Don't have an account?{" "}
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
    </form>
    </Container>
  );
}

export default Login;
