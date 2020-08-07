import React from "react";
import { Accordion, Card } from "react-bootstrap";
import SedanImg from "./sedan.png";
import { setUser } from "../actions/user";
import { useDispatch } from "react-redux";

const CarCard = (props) => {
  const carId = props.carId;
  const carName = props.name ? props.name : "Name";
  const parked = props.parked ? props.parked : false;
  const make = props.make ? props.make : "Make";
  const model = props.model ? props.model : "Model";
  const year = props.year ? props.year : "Year";
  const color = props.color ? props.color : "Color";
  const restrictions = props.restrictions ? props.restrictions : {};

  const dispatch = useDispatch();
  async function deleteCar() {
    try {
      await fetch(`${process.env.REACT_APP_BACKEND_URL}car/${carId}`, {
        method: "DELETE",
        credentials: "include",
      });
      await fetch(`${process.env.REACT_APP_BACKEND_URL}user/me`, {
        method: "GET",
        credentials: "include",
      }).then(async (res) => {
        if (res.status === 200) {
          const user = await res.json();
          dispatch(setUser(user[0]));
        } else {
          const error = new Error(res.error);
          throw error;
        }
      });
    } catch (err) {
      console.error(err);
    }
  }
  async function parkCar(parkBoolean) {
    try {
      await fetch(`${process.env.REACT_APP_BACKEND_URL}car/${carId}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isParked: parkBoolean,
          location: null,
          street: null,
        }),
      });
      await fetch(`${process.env.REACT_APP_BACKEND_URL}user/me`, {
        method: "GET",
        credentials: "include",
      }).then(async (res) => {
        if (res.status === 200) {
          const user = await res.json();
          dispatch(setUser(user[0]));
        } else {
          const error = new Error(res.error);
          throw error;
        }
      });
    } catch (err) {
      console.error(err);
    }
  }

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
                onClick={(e) => {
                  parkCar(false);
                  e.stopPropagation();
                }}
              ></i>
            ) : (
              <i
                className="fa fa-car card-park-icon"
                aria-hidden="true"
                onClick={(e) => {
                  parkCar(true);
                  e.stopPropagation();
                }}
              ></i>
            )}
            <i
              className="fa fa-times-circle card-delete-car-icon"
              aria-hidden="true"
              onClick={(e) => {
                deleteCar();
                e.stopPropagation();
              }}
            ></i>
            <i
              className="fa fa-caret-down card-dropdown-icon"
              aria-hidden="true"
            ></i>

            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div className="card-hidden-content">
                  <Card.Subtitle className="mb-1 text-muted">
                    {year} {color}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-1">
                    {make} {model}
                  </Card.Subtitle>
                  <img className="car-type-image" src={SedanImg} />
                  {parked ? (
                    <>
                      <Card.Subtitle className="mb-1 text-muted">
                        Parked At:
                      </Card.Subtitle>
                      <Card.Subtitle className="mb-1">
                        Fell St between Pierre and Scott
                      </Card.Subtitle>
                      <Card.Subtitle className="mb-1 text-muted">
                        North Side
                      </Card.Subtitle>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </Card.Body>
            </Accordion.Collapse>
            {parked ? (
              <>
                <Card.Subtitle className="mb-1 text-muted">
                  -Restrictions At-
                </Card.Subtitle>
                <Card.Subtitle className="mb-1">10:00am Sunday</Card.Subtitle>
              </>
            ) : (
              ""
            )}
          </div>
        </Accordion.Toggle>
      </Card>
    </Accordion>
  );
};

export default CarCard;
