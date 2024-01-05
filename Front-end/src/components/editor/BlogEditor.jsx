import { useEffect, useState } from 'react';
import { collection, query, where, getDocs,limit } from 'firebase/firestore';
import { app,db,fire } from "../../firebase";// assuming that you have already initialized the Firebase app and imported the Firestore instance as 'db'

import {Form,Col,Row,CardText,Card,FormGroup,Input,Label, Button,CardImg} from "reactstrap";
function BlogEditor(props) {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
    const email=`${props.name}`;
    const fetchData = async () => {
      const q = query(collection(db, 'History'), where('Email', '==', email));
      const querySnapshot = await getDocs(q);
      const docs = querySnapshot.docs.map((doc) => doc.data());
      setData(docs);

      const q1 = query(collection(db, 'Feedback'), where('Email', '==', email));
      const querySnapshot1 = await getDocs(q1);
      const docs1 = querySnapshot1.docs.map((doc) => doc.data());
      setData1(docs1);

      const q2 = query(collection(db, 'Payment'), where('Email', '==', email));
      const querySnapshot2 = await getDocs(q2);
      const docs2 = querySnapshot2.docs.map((doc) => doc.data());
      setData2(docs2);
    };

    const inputStyle = {
      width: '600px'
    };
  return (
    <Form>
      <Label>HISTORY </Label>
      <br/>
      <br/>
      {data.length > 0 ? (
        <><ul>
          <FormGroup>
            {data.map((item) => (
              <li key={item.id}>
                <p>Name: {item.Name}</p>
                <p>Email: {item.Email}</p>
                <p>City: {item.City}</p>
                <p>Country: {item.Country}</p>
                <p>Address: {item.Address}</p>
                <p>City: {item.City}</p>
                <p>Description: {item.Description}</p>
                <p>No.of.People: {item.People}</p>
                <p>Date: {item.Date}</p>
                <p>Time: {item.Time}</p>
                <p>Type: {item.Type}</p>
                <p>---------------------------------------------------------------------</p>
                {/* Add additional fields here */}
              </li>
            ))}
          </FormGroup>
        </ul><ul>
          <Label>Feedback History</Label>
            <FormGroup>
              {data1.map((item) => (
                <li key={item.id}>
                  <p>Name: {item.Name}</p>
                  <p>Email: {item.Email}</p>
                  <p>UI_RATING: {item.UI_rating}</p>
                  <p>Category: {item.category}</p>
                  <p>Payment: {item.payment}</p>
                  <p>Summary: {item.summary}</p>
                  <p>Worker_Feedback: {item.worker_feedback}</p>
                  <p>Worker_Rating: {item.worker_rating}</p>
                  <p>Date: {item.Date}</p>
                  <p>Time: {item.Time}</p>
                  <p>---------------------------------------------------------------------</p>
                  {/* Add additional fields here */}
                </li>
              ))}
            </FormGroup>
          </ul>
          <ul>
          <Label>Payment History</Label>
            <FormGroup>
              {data2.map((item) => (
                <li key={item.id}>
                  <p>Email: {item.Email}</p>
                  <p>Amount: {item.Amount}</p>
                  <p>Date: {item.Date}</p>
                  <p>Time: {item.Time}</p>
                  <p>---------------------------------------------------------------------</p>
                  {/* Add additional fields here */}
                </li>
              ))}
            </FormGroup>
          </ul>
          </>
      ) : (
        <img src={"https://www.ascreatives.com/wp-content/uploads/2019/08/creativeHISTORY-UNblue-Copyright-logo.png"} style={{ width: "100%" }} alt="Noting" />
      )}
      <Button onClick={fetchData} style={inputStyle}>view</Button>
      </Form>
  );
}
export default BlogEditor;



