import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Button,
  CardSubtitle,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  CardGroup,
  Container,
  Col,
  Row,
} from "reactstrap";
import Logo from "../../assets/video.mp4"
function Home(props) {
  return (
    
    <div style={{ marginTop: "-3rem" }}>
      <Card inverse style={{ border: "none" }}>
        <video
          style={{ height: "50vh", objectFit: "cover" }}
          autoPlay
          muted
          loop
        >
          <source
            src={Logo}
            type="video/mp4"
          />
          Sorry, your browser doesn't support embedded videos.
        </video>
        <CardImgOverlay
          className="d-flex justify-content-center align-content-center"
          style={{ flexDirection: "column", lineHeight: "2rem" }}
        >
          <CardTitle tag="h1">Get your issues resolved!</CardTitle>
          <CardText tag="p" style={{ width: "50vh", fontSize: "1.5rem" }}>
          Assign professionals to address the issues at your house
          </CardText>
          {props.name ? <Link to="/new" style={{ width: "fit-content" }}>
            <Button className="text-light">Add Details</Button>
          </Link> : <Link to="/login" style={{ width: "fit-content" }}>
            <Button className="text-light">Browse</Button>
          </Link>} 
        </CardImgOverlay>
      </Card>
      <div className="container">
        <Row className="my-5 ">
          <Col md={12} className="text-center my-3 text-dark">
            <h3>What we Offer</h3>
          </Col>
          <Col md={4} className="mb-2">
            <Card className="bg-dark py-5 px-3">
              <CardBody>
                <div className="text-center">
                <i className="fa-solid fa-video" style={{fontSize:'2rem', color: 'skyblue'}}></i>
                </div>
                <CardTitle className="h3 text-warning">Free consultations</CardTitle>
                <CardText className="text-muted">
                Service providers offer free consultations to new clients. 
                And to know what their needs and goal.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md={4} className="mb-2">
            <Card className="bg-dark py-5 px-3">
              <CardBody>
              <div className="text-center">
                <i className="fa-solid fa-clipboard-check" style={{fontSize:'2rem', color: 'skyblue'}}></i>
                </div>
                <CardTitle className="h3 text-warning">
                  User Convenient
                </CardTitle>
                <CardText className="text-muted">
                This website is designed to be convenient for the users. 
                The user offers flexible scheduling.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md={4} className="mb-2">
            <Card className="bg-dark py-5 px-3">
              <CardBody>
              <div className="text-center">
                <i className="fa-solid fa-money-bill-1" style={{fontSize:'2rem', color: 'skyblue'}}></i>
                </div>
                <CardTitle className="h3 text-warning">Easy Payment</CardTitle>
                <CardText className="text-muted">
                  We accept a wide range of payment methods, including card
                  payments, bank payments.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
