import React, { useState ,useEffect} from "react";
import { Form, FormGroup, Label, Input, Col, Row, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { db,auth } from "../../firebase";
import {
  collection,
  addDoc,

} from "firebase/firestore";

function Search(props) {
  const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const data0 = urlParams.get('data');
  const [userName, setUserName] = useState("");
  const [useremail, setUseremail] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        setUseremail(user.email);
      } else 
      {setUserName("");
        setUseremail("");
    }
    });
  }, []);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");
  const [newpay, setnewpay] = useState("");
  const [newcat, setnewcat] = useState("");
  const [newworker, setnewworker] = useState("");
  const [newui, setnewui] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "Feedback");
  const navigate = useNavigate();
  const createUser = async () => {
    let date = new Date().toLocaleDateString("de-DE");
      let time=new Date().toLocaleTimeString();
      if(data0!=null)
      {
    if(newName!==""&&newAge!==""&&newpay!==""&&newcat!==""&&newworker!==""&&newui!==""){
      setSubmitButtonDisabled(true);
    await addDoc(usersCollectionRef, {Name:userName,Email:useremail,summary: newName,worker_feedback: newAge,payment:newpay,category:newcat,worker_rating:newworker,UI_rating:newui,Date:date,Time:time });
    setSubmitButtonDisabled(false);
    navigate("/sm");
  }
  else{
    navigate("/listings");
  }
}
else{
  navigate("/new") 
}
};

  return (
    <Form
      className="p-1 "
      style={{
        border: "none",
        backgroundColor: "#fff",
        width: "100%",
      }}
    >
      <Row className="d-flex">
        <Col md={6}>
          <FormGroup>
            <Label for="search">Feedback</Label>
            <Input
              
              // id="search"
              // name="select"
              // type="search"
              // 
             style={{
                width: "100%",
               }}
              // onChange={handleChange}
              onChange={(event) => {
                setNewName(event.target.value);
              }}
              placeholder="Enter Feedback"
             
            ></Input>
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label for="search">Worker Behaviour</Label>
            <Input
             
              name="select"
              type="select"
              style={{
                width: "100%",
              }}
             
              onChange={(event) => {
                setNewAge(event.target.value);
              }}
            >
              <option selected disabled>Worker Behaviour</option>
              <option>Gentle</option>
              <option>Weird</option>
              <option>Chaos</option>
               
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <Row className="d-flex">
        <Col md={3}>
          <FormGroup>
            <Input id="price" name="select" type="select"
            onChange={(event) => {
              setnewpay(event.target.value);
            }}
            >
              <option selected disabled>Payment</option>
              <option>Below 5k</option>
              <option>5k and above</option>
              <option>10k and above</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Input
              id="exampleSelect"
              name="select"
              type="select"
              onChange={(event) => {
                setnewcat(event.target.value);
              }}
            >
              <option selected disabled>Category</option>
              <option>Carpentry</option>
              <option>Plumbing</option>
              <option>Electrician</option>
              <option>Home Cleaning</option>
              <option>Gardening</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Input id="exampleSelect" name="select" type="select"
            onChange={(event) => {
              setnewworker(event.target.value);
            }}
            >
              <option selected disabled>Worker rating</option>
              <option>Worst Experience</option>
              <option>Not Bad</option>
              <option>Good</option>
              <option>Excellent</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Input id="exampleSelect" name="select" type="select"
            
            onChange={(event) => {
              setnewui(event.target.value);
            }}>
              <option selected disabled>UI Rating</option>
              <option>Worst Experience</option>
              <option>Not bad</option>
              <option>Good</option>
              <option>Amazing</option>
            </Input>
          </FormGroup>
        </Col>
        <Button onClick={createUser}  disabled={submitButtonDisabled}>Submit</Button>
        <img src={"https://d18891bkk3ccc2.cloudfront.net/wp-content/uploads/2021/09/08145124/SHO_BLOG_EEFGuideance_210908-01.jpg"} style={{ width: "100%" }} alt="Noting" />
        <Label for="search">History List</Label>
        <Button>
        <NavLink to="/new-Blog" className="nav-link" style={{color:"white"}}>
                View
          </NavLink></Button>
      </Row>
    </Form>
  );
}

export default Search;