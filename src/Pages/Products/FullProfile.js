import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useParams } from "react-router";

const FullProfile = () => {
  const { id } = useParams();
  const [partner, setPartner] = useState();
  console.log(id);

  useEffect(() => {
    fetch(`https://radiant-retreat-40420.herokuapp.com/partners/${id}`)
      .then((res) => res.json())
      .then((data) => setPartner(data));
  }, [id]);

  return (
    <div className="container mt-5">
      <Row>
        <Col sm={12} md={6} lg={6}>
          <Image className="partner-picture" src={partner?.picture} />{" "}
        </Col>
        <Col className="mt-5" sm={12} md={6} lg={6}>
          <div className="text-left">
            <h3 className="text-left">Name:  {partner?.name}</h3>
            <h3  className="text-left"> Live In:  {partner?.live}</h3>
            <h3> Mobile No: {partner?.phone}</h3>
            <h3> Passport No: {partner?.passport}</h3>
            <h3> Total Deposit: {partner?.amount}</h3>
            <h3> Present Address: {partner?.address}</h3>
            <h3> Permanent Address: {partner?.parmanentAddress}</h3>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FullProfile;
