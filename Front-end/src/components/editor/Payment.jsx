import React from "react";
import {Form,Col,Row,CardText,Card,FormGroup,Input,Label, Button,CardImg} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useState ,useEffect} from "react";
import { app,db,fire } from "../../firebase";
import {
  collection,
  addDoc,

} from "firebase/firestore";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { query, where, getDocs,limit,updateDoc, doc } from 'firebase/firestore';
const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const textLength = 6;
function generateRandomText() {
  let result = "";
 for (let i = 0; i < textLength; i++) {
   result += characters.charAt(Math.floor(Math.random() * characters.length));
 }
 return result;
}
function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 900000) + 100000;
  let timestamp = new Date().getTime();
  let uniqueNumber = timestamp.toString() + randomNumber.toString();
  return parseInt(uniqueNumber.substr(0, 6));
}
const conr=generateRandomText();
function Payment(props) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const data0 = urlParams.get('data');
  const [myList, setMyList] = useState([]);
  const con=generateRandomNumber();
  const [location, setLocation] = useState(null);
  navigator.geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
    },
    error => {
      console.log(error);
    }
  );
  const send = async () => {
    setButtonClicked(true);
    const data1=[conr,con,location,data0]
    console.log(data1)
  axios.post('http://127.0.0.1:5000/', {
      data1
      })
      .then(response => {
      console.log(response);
      setMyList(response.data)
      })
      .catch(error => {
      console.log(error);
      });
     // setSubmitButtonDisabled(false);
  };
  const [newemail, setNewName] = useState("");
  const[newamount,setNewAmo]=useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const usersCollectionRef = collection(db, "Payment");
  const inputStyle = {
    width: '600px'
  };
  let word ="sayhello";
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigate = useNavigate();
  const [newOTP, setnew] = useState("");
  const check = async () => {
      if(newOTP===conr)
      {
        setSubmitButtonDisabled(true);
      let date = new Date().toLocaleDateString("de-DE");
      let time=new Date().toLocaleTimeString(); 
    await addDoc(usersCollectionRef, {Email:`${props.name}`,OTP:newOTP,Amount:Number(newamount),Date:date,Time:time});
    const q = query(collection(db, 'Worker_Details'), where('Email', '==', data0));
    const querySnapshot = await getDocs(q);
    const docs = querySnapshot.docs.map((doc) => doc.data());
    let docId=''
      querySnapshot.forEach(async (dc)=>{
        docId=dc.id
      
      const user=doc(db,"Worker_Details",docId)
      await updateDoc(user,{
        Avaliable: 1
      })
    })
    setSubmitButtonDisabled(false);
        navigate(`/listings?data=${word}`);
      }
      else{
        navigate(`/payment`);
      }
  };
  return (
  <Form>
      <h2>Payment</h2>
      <br></br>
      <Col md={6}>
                <FormGroup>
                  <Label for="size">ENTER ONE TIME PASSWORD </Label>
                  <br/>
                  <Input
                    required
                    //onChange={handleChange}
                    //value={listingData.size}
                    onChange={(event) => {
                      setnew(event.target.value);
                    }}
                    style={inputStyle}
                    placeholder="Enter OTP"
                  />
                  
                </FormGroup>
                <FormGroup>
                  <Label for="size">ENTER AMOUNT </Label>
                  <br/>
                  <Input
                    required
                    //onChange={handleChange}
                    //value={listingData.size}
                    onChange={(event) => {
                      setNewAmo(event.target.value);
                    }}
                    style={inputStyle}
                    placeholder="Enter Amount"
                  />
                  
                </FormGroup>
              </Col>
              
      <CardText tag="p" style={{ width: "90vh", fontSize: "1.0rem" }}>
      After completing your payment with our worker get OTP from worker and enter it above.
        Once you enter the one time password we will confirm your payment...
      </CardText>
      Your Payment ID:{con}
      {buttonClicked ? null : (
        <Button style={inputStyle} onClick={send}>
          Send your OTP
        </Button>
      )}
   
    <Button style={inputStyle} onClick={check}  disabled={submitButtonDisabled}>Submit</Button>
    </Form>
  );
}

export default Payment;
