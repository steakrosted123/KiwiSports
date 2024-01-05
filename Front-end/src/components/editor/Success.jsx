import React from "react";
import { Button, Form } from "reactstrap";
import { useNavigate } from "react-router-dom";
function SM() {
    const inputStyle = {
        width: '630px',
      };
      const navigate = useNavigate();
      setTimeout(function() {
        navigate("/")
      }, 10000);
  return (
    <Form>
        <img src={"https://uploads-ssl.webflow.com/5ef0df6b9272f7410180a013/60c0e28575cd7c21701806fd_q1cunpuhbdreMPFRSFLyfUXNzpqv_I5fz_plwv6gV3sMNXwUSPrq88pC2iJijEV7wERnKXtdTA0eE4HvdnntGo9AHAWn-IcMPKV-rZw1v75vlTEoLF4OdNqsRb7C6r7Mvzrm7fe4.png"} style={{ width: "100%",alignItems:"center",alignContent:"center"}} alt="Nothing" onClick={navigate("/")} />
    </Form>
  );
}
export default SM;
