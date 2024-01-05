import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";
import { Button } from "reactstrap";
import styles from "./signup.css";
import { Container } from "reactstrap";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const handleToggleClick = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        
        navigate("/login");
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
        <h2 className={styles.heading}>Signup</h2>
      <br/>
        <InputControl
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <br/>
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <br/>
        <InputControl
          label="Password"
          placeholder="Enter password"
          type={showPassword ? 'text' : 'password'}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
      <br/>
      <Button type="button" onClick={handleToggleClick}>
          {showPassword ? 'Hide Password' : 'Show Password'}
        </Button>
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <Button onClick={handleSubmission} disabled={submitButtonDisabled} style={inputStyle}>
            Signup
          </Button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/Login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div></form>

    </Container>
  );
}

export default Signup;
