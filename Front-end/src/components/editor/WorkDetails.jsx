import { useEffect, useState } from 'react';
import { collection, query, where, getDocs,limit,updateDoc,doc} from 'firebase/firestore';
import { app,db,fire } from "../../firebase";// assuming that you have already initialized the Firebase app and imported the Firestore instance as 'db'
import { useNavigate, NavLink } from "react-router-dom";
import {Form,Col,Row,CardText,Card,FormGroup,Input,Label, Button,CardImg} from "reactstrap";
function WorkDetails(props) {
  const navigate = useNavigate();
  const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const data0 = urlParams.get('data');
    const data1 = urlParams.get('data1');
    const data2 = urlParams.get('data2');
    const data3=1;
  const [data, setData] = useState([]);
    const email=`${props.name}`;
    const fetchData = async () => {
      if(data0 !=null){
      const q = query(collection(db, 'Worker_Details'), where('Category', '==', data0),where('Avaliable','==',data3),where('CIty','==',data1),where('State','==',data2),limit(1));
      const querySnapshot = await getDocs(q);
      const docs = querySnapshot.docs.map((doc) => doc.data());
      let docId=''
      querySnapshot.forEach(async (dc)=>{
        docId=dc.id
      
      const user=doc(db,"Worker_Details",docId)
      await updateDoc(user,{
        Avaliable: 0
      })
    })
      setData(docs);
      const mail=docs[0].Email
      console.log(mail)
        alert("Worker is assigned successfully")
      setTimeout(function() {
        navigate(`/payment?data=${mail}`)
      }, 12000);
    }
    else{
      navigate("/new")
    }
    };

    const inputStyle = {
      width: '630px'
    };
  return (
    <Form>
      <Label>Workers Details</Label>
      <br/>
      <br/>
      {data.length > 0 ? (
        <ul>
          <FormGroup>
          {data.map((item) => (
            <li key={item.id}>
             <p>Name: {item.Name}</p>
             <p>Experience: {item.Experience}</p>
               <p>City: {item.CIty}</p>
              <p>Phone_no: {item.Phone_no}</p>
              <p>Category: {item.Category}</p>
              <p>---------------------------------------------------------------------</p>
              <p>Payment window automatically redirect in 2 min</p>
              <p>---------------------------------------------------------------------</p>
              {/* Add additional fields here */}
            </li>
          ))}
          </FormGroup>
        </ul>
      ) : (
        <img src={"https://thumbs.dreamstime.com/b/landscape-design-flowers-coniferous-plants-landscape-design-flowers-stones-coniferous-plants-landscaping-157931201.jpg"} style={{ width: "100%",alignItems:"center",alignContent:"center"}} alt="Nothing" />
      )}
      <br/>
      <Button onClick={fetchData} style={inputStyle}>ASSIGN</Button>
      </Form>
  );
}
export default WorkDetails;