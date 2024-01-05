import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { app,db,fire } from "../../firebase";
import {
  Form,
  FormGroup,
  Input,
  FormText,
  Label,
  Row,
  Col,
  Button,
  Container,
  Card,
} from "reactstrap";
import useCloudinary from "../hooks/useCloudinary";
import Response from "../response/Response";
import {
  collection,
  addDoc,

} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
function NewListing() {
  return (
    <Container>
      <NewListingForm />
      
    </Container>
  );
  
}

function NewListingForm() {
  
  const [newName, setNewName] = useState("");
  const [newpeolpe, setNewpeo] = useState("");
  const [newcity, setnewcity] = useState("");
  const [newcountry, setnewcountry] = useState("");
  const [newemail, setnewemail] = useState("");
  const [newtype, setnewtype] = useState("");
  const [newdes, setnewdes] = useState("");
  const [newadd, setnewadd] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "Problem_Details");
  const usersCollectionRe = collection(db, "History");
  const navigate = useNavigate();
  const createUser = async () => {
    
    if(newName!==""&&newpeolpe!==""&&newcity!==""&&newcountry!==""&&newtype!==""&&newemail!==""&&newadd!==""){
      setSubmitButtonDisabled(true);
      let date = new Date().toLocaleDateString("de-DE");
      let time=new Date().toLocaleTimeString(); 
    await addDoc(usersCollectionRef, { Name:newName,People:Number(newpeolpe),Email:newemail,City:newcity,Country:newcountry,Date:date,Time:time,Type:newtype,Description:newdes,Address:newadd});
    await addDoc(usersCollectionRe, { Name:newName,People:Number(newpeolpe),Email:newemail,City:newcity,Country:newcountry,Date:date,Time:time,Type:newtype,Description:newdes,Address:newadd});
    setSubmitButtonDisabled(false);
    let word = newtype;
    let word1=newcity;
    let word2=newcountry;
      word = word.charAt(0).toUpperCase() + word.slice(1);
      word1 = word1.charAt(0).toUpperCase() + word1.slice(1);
      word2 = word2.charAt(0).toUpperCase() + word2.slice(1);
    navigate(`/Work?data=${word}&data1=${word1}&data2=${word2}&data3=${newadd}`);
  }
  else{
    navigate("/new")
  }
};
  const onChange = async (event) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();
  
    fileReader.onload = () => {
      const fileContents = fileReader.result;
      localStorage.setItem('fileContents', fileContents);
    };
  
    fileReader.readAsText(file);
  };
  const [listingData, setlistingData] = useState({
    name: "",
    summary: "",
    city: "",
    county: "",
    category: "",
    type: "",
    description: "",
    imgUrl: "",
    bedrooms: "",
    bathrooms: "",
    size: "",
    price: "",
  });

  const [urlData, setUrlData] = useState(null);
  const [uploadImage] = useCloudinary();
  const [messageClass, setMessageClass] = useState(null);

  function getImageUrl(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setUrlData(reader.result);
    };
  }

  function handleChange(event) {
    let key = event.target.name;
    let value;
    if (event.target.type === "select") {
      value = event.target.selected;
    } else {
      value = event.target.value;
    }

    if (event.target.type === "file") {
      value = event.target.files[0];
      getImageUrl(value);
    }

    setlistingData({ ...listingData, [key]: value });
  }

  async function postListing(data) {
    try {
      let response = await axios.post(
        `https://makazipopote-api.herokuapp.com/api/v1/listings`,
        data
      );
      let listing = await response.data;
      return listing;
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const ImgData = new FormData();
    ImgData.append("file", listingData.imgUrl);
    ImgData.append("upload_preset", "makazi");
    ImgData.append("cloud_name", "hng-pre-internship");

    try {
      let url = await uploadImage(ImgData);
      let result = await postListing({ ...listingData, imgUrl: url });
      if (Object.keys(result).length) {
        setlistingData({
          name: "",
          summary: "",
          city: "",
          county: "",
          category: "",
          type: "",
          description: "",
          imgUrl: "",
          bedrooms: "",
          bathrooms: "",
          size: "",
          price: "",
        })
        setMessageClass("success");
        setTimeout(() => {
          window.location = "listings";
        }, 2000);
      }
    } catch (error) {
      setMessageClass("danger");
      console.log(error.message);
    }
  }

  return (
    <Row className="m-5">
      {messageClass ? (
        <Col md={12}>
          <Response messageClass={messageClass} />
        </Col>
      ) : null}
      <Col md={4}>
        <Card style={{ height: "100%" }}>
          <img src={"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} style={{ width: "100%" }} alt="Noting" />
          <img src={"https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format"} style={{ width: "100%" }} alt="Noting" />
          <img src={"https://images.unsplash.com/photo-1628527304948-06157ee3c8a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} style={{ width: "100%" }} alt="Noting" />
          <img src={"https://static.vecteezy.com/system/resources/previews/002/140/279/non_2x/self-isolation-and-stay-at-home-during-covid-19-free-photo.jpg"} style={{ width: "100%" }} alt="Noting" />

        </Card>
      </Col>
      <Col md={8}>
        <Card style={{ height: "100%" }} className="p-5">
          <Form onSubmit={handleSubmit}>
            {}
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    required
                    placeholder="User Name"
                    type="text"
                    onChange={(event) => {
                      setNewName(event.target.value);
                    }}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="size">People</Label>

                  <Input
                    required
                    //onChange={handleChange}
                    //value={listingData.size}
                    id="size"
                    name="size"
                    placeholder="No of People need"
                    type="number"
                    min={1}
                    max={7}
                    onChange={(event) => {
                      setNewpeo(event.target.value);
                    }}
                  />
                </FormGroup>
              </Col>
            </Row>
            
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="city">City</Label>

                  <Input
                    required
                    //onChange={handleChange}
                    //value={listingData.city}
                    id="city"
                    name="city"
                    type="text"
                    onChange={(event) => {
                      setnewcity(event.target.value);
                    }}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="county">State</Label>

                  <Input
                    required
                    //onChange={handleChange}
                    //value={listingData.county}
                    id="county"
                    name="county"
                    type="text"
                    onChange={(event) => {
                      setnewcountry(event.target.value);
                    }}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
             <Col md={4}>
                
              </Col> 
            </Row>
            <FormGroup>
              <Label for="price">Address</Label>

              <Input
                required
                //onChange={handleChange}
                id="price"
                name="price"
                placeholder="Enter Address"
                onChange={(event) => {
                  setnewadd(event.target.value);
                }}
              />

            </FormGroup>
            <FormGroup>
              <Label for="price">E-Mail</Label>

              <Input
                required
                //onChange={handleChange}
                id="price"
                name="price"
                placeholder="Enter Email"
                onChange={(event) => {
                  setnewemail(event.target.value);
                }}
              />

            </FormGroup>
            <FormGroup row>
              <Label for="type" sm={2}>
                Type
              </Label>
              <Col sm={10}>
                <Input
                  required
                  //onChange={handleChange}
                  //selected={listingData.type}
                  id="type"
                  name="type"
                  type="select"
                  onChange={(event) => {
                    setnewtype(event.target.value);
                  }}
                >
                  <option selected disabled>Choose type of problem</option>
                  <option>Carpenter</option>
                  <option>Gardening</option>
                  <option>Cleaning</option>
                  <option>Plumbing</option>
                  <option>Electrician</option>
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="description" sm={12}>
                Description
              </Label>
              <Col sm={12}>
                <Input
                  required
                  //onChange={handleChange}
                  //value={listingData.description}
                  id="description"
                  name="description"
                  type="textarea"
                  rows={5}
                  onChange={(event) => {
                    setnewdes(event.target.value);
                  }}
                />
              </Col>
            </FormGroup>
            <Button onClick={createUser}  disabled={submitButtonDisabled}>Submit</Button>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}

export default NewListing;
