import React from "react";
import {
  CardBody,
  CardTitle,
  Card,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

function Profile() {
  return (
    <Card
      className="d-flex justify-content-center align-content-center align-items-center"
      style={{
        flexDirection: "column",
        width: "auto",
        height: "100%",
        margin: "auto",
      }}
    >
      <h2 className="text-muted">About Us</h2>
      <img
        alt="profile"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQipfCaJI9kOsBtTgu15FLKWeuKUBdp5e7luQ&usqp=CAU"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "100%",
          margin: "0 auto",
          marginTop: "0.5rem",
        }}
      />
      <CardBody>
        <CardTitle tag="h5" className="text-center">
          PSG Students
        </CardTitle>
        <CardSubtitle className="mb-2 text-muted text-center" tag="h6">
          Group of Four
        </CardSubtitle>
        <CardText>
          <address>
            <ul className="list-unstyled">
              <li>
                <i class="fa-solid fa-envelope"></i> Email:{" "}
                <a href="mailto:20z248@psgtech.ac.in">20z248@psgtech.ac.in</a>
              </li>
              <li>
                <i class="fa-solid fa-phone"></i>Phone:{" "}
                <a href="tel:+91-6384057966">6384057966</a>{" "}
              </li>
              <li>
                <i class="fa-solid fa-location-dot"></i>Location:Peelamedu,Coimbatore
              </li>
              <li className=" d-flex">
                Social:
                <ul className="list-unstyled d-flex justify-content-between">
                  <li>
                    <a href="http://www.facebook.com/">
                      <i class="fa-brands fa-square-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="http://www.facebook.com/">
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="http://www.facebook.com/">
                      <i class="fa-brands fa-square-instagram"></i>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

           
          </address>
        </CardText>
        {/* <Button>Edit</Button> */}
      </CardBody>
    </Card>
  );
}

export default Profile;
