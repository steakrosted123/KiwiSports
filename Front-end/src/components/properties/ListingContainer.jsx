import React from "react";

import { Row, Col } from "reactstrap";
import BlogList from "../blogs/BlogList";
import NewListingForm from "../NewListing/NewListingForm";
import Profile from "../profile/pro";
import Listings from "./Listings";

function ListingContainer() {
  return (
    <div className="container-fluid">
      <Row>
        <Col md={8}>
          <Listings />
        </Col>
        <Col md={4}>
          <Profile />
        </Col>
      </Row>
    </div>
  );
}

export default ListingContainer;
