import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Partners = () => {

     const [partners, setPartners] = useState([]);
console.log(partners)
useEffect(() => {
        // const uri="./testingData.json"
        fetch('https://radiant-retreat-40420.herokuapp.com/partners')
            .then(res => res.json())
        .then(data=>setPartners(data))
    }, [])
    return (
        <div className="container mb-5">
            <h1> Our Partners  </h1>

          
            <Row>
        {partners.map((partner) => (
            <Col key={partner.id} className="mt-5" md={4} lg={3} xs={12}>
              <Card>
                <Card.Img
                  className="doctor-img"
                  variant="top"
                  src={partner.picture}
                />
                <Card.Body className="doctor-cart-bg">
                  <Card.Title>{partner.name}</Card.Title>
                  {/* <Card.Text>{partner.passport}</Card.Text> */}
                  <Card.Text>{partner.live}</Card.Text>
                  <Link to={`/fullProfile/${partner._id}`}>
                    <Button className="bookAppointmentBtn" variant="primary">View Full Profile</Button>
                  </Link>
                  <Link to={`/addPartner/${partner.id}`}>
                    <Button className="bookAppointmentBtn mt-3" variant="primary">New Deposit</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
        </div>
    );
};

export default Partners;

//       "name":"Tofazzal",
//       "live":"Muscat, Oman",
//       "phone":"+968 93554255",
//       "email":"topuahammed322@gmail.com",
//       "address":"Mymensingh",
//       "parmanentAddress":"Dhobaura,Mymensingh",
//       "passport":"BE0323454",
//       "amount":"30,000",
//       "picture":"src=\"https://ibb.co/Ky8GNXp\""