import React from "react";
import { Accordion, Card } from "react-bootstrap";
import SedanImg from "./sedan.png";

const CarCard = (props) => {
  const carName = props.name ? props.name : "Name";
  const parked = props.parked ? props.parked : false;
  const restrictions = props.restrictions ? props.restrictions : {};

  return (
    <Accordion defaultActiveKey="1">
      <Card style={{ width: "100%" }}>
        <Accordion.Toggle as={Card.Body} eventKey="0">
          <div className="card-outer-body">
            <Card.Title>{carName}</Card.Title>
            {parked ? (
              <i
                className="fa fa-product-hunt card-park-icon"
                aria-hidden="true"
              ></i>
            ) : (
              <i className="fa fa-car card-park-icon" aria-hidden="true"></i>
            )}
            <i
              className="fa fa-caret-down card-dropdown-icon"
              aria-hidden="true"
            ></i>

            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div className="card-hidden-content">
                  <Card.Subtitle className="mb-1 text-muted">
                    2010 Grey
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-1">
                    Volkswagen Jetta
                  </Card.Subtitle>
                  <img className="car-type-image" src={SedanImg} />;
                  <Card.Subtitle className="mb-1 text-muted">
                    Parked At:
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-1">
                    Fell St between Pierre and Scott
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-1 text-muted">
                    North Side
                  </Card.Subtitle>
                </div>
              </Card.Body>
            </Accordion.Collapse>
            <Card.Subtitle className="mb-1 text-muted">
              -Restrictions At-
            </Card.Subtitle>
            <Card.Subtitle className="mb-1">10:00am Sunday</Card.Subtitle>
          </div>
        </Accordion.Toggle>
      </Card>
    </Accordion>
  );
};

export default CarCard;
