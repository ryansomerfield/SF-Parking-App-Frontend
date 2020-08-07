import React, { useState, useEffect } from "react";
import { Form, Col, Button } from "react-bootstrap";

const StreetForm = (props) => {
  const [isBounding, setBounding] = useState(false);
  const [doneBounding, setdoneBounding] = useState(false);
  const [isDisplayLine, setDisplayLine] = useState(false);
  const [doneDisplayLine, setdoneDisplayLine] = useState(false);
  useEffect(() => {
    if (isDisplayLine) {
      //Do something
    }
  }, [isDisplayLine]);
  useEffect(() => {
    if (isBounding) {
      //Do something
    }
  }, [isBounding]);
  useEffect(() => {
    if (doneDisplayLine) {
      //Do something
    }
  }, [doneDisplayLine]);
  useEffect(() => {
    if (doneBounding) {
      //Do something
    }
  }, [doneBounding]);
  const boundingClicked = () => {
    setBounding(!isBounding);
    setDisplayLine(false);
  };
  const displaylineClicked = () => {
    setDisplayLine(!isDisplayLine);
    setBounding(false);
  };
  return (
    <>
      <h5>Street Entry Form</h5>
      <Form>
        <div className="form-border">
          <h6>Street Info</h6>
          <Form.Row>
            <Form.Group as={Col} controlId="streetformStreetName">
              <Form.Label>Street Name</Form.Label>
              <Form.Control placeholder="Street Name" />
            </Form.Group>
            <Form.Group as={Col} controlId="streetformSideOfStreet">
              <Form.Label>Side of Street</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>North</option>
                <option>South</option>
                <option>East</option>
                <option>West</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="streetformCrossStreet1">
              <Form.Label>First Cross Street</Form.Label>
              <Form.Control placeholder="Cross Street 1" />
            </Form.Group>

            <Form.Group as={Col} controlId="streetformCrossStreet2">
              <Form.Label>Second Cross Street</Form.Label>
              <Form.Control placeholder="Cross Street 2" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Button
              as={Col}
              variant="secondary"
              disabled={doneBounding}
              onClick={boundingClicked}
            >
              {isBounding ? "Drawing Bounding Box" : "Bounding Box"}
            </Button>
            <Button
              as={Col}
              variant="secondary"
              disabled={doneDisplayLine}
              onClick={displaylineClicked}
            >
              {isDisplayLine ? "Drawing Display Line" : "Display Line"}
            </Button>
          </Form.Row>
        </div>
        <div className="form-border">
          <h6>Parking Restrictions</h6>
          <Form.Row>
            <Form.Group as={Col} controlId="streetformPermitZone">
              <Form.Label>Permit Zone</Form.Label>
              <Form.Control as="select" defaultValue="None">
                <option>None</option>
                <option>A</option>
                <option>AA</option>
                <option>B</option>
                <option>BB</option>
                <option>C</option>
                <option>CC</option>
                <option>D</option>
                <option>DD</option>
                <option>E</option>
                <option>EE</option>
                <option>F</option>
                <option>G</option>
                <option>H</option>
                <option>I</option>
                <option>J</option>
                <option>K</option>
                <option>L</option>
                <option>M</option>
                <option>N</option>
                <option>O</option>
                <option>P</option>
                <option>Q</option>
                <option>R</option>
                <option>S</option>
                <option>T</option>
                <option>U</option>
                <option>V</option>
                <option>W</option>
                <option>X</option>
                <option>Y</option>
                <option>Z</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="streetformMaxPermitHours">
              <Form.Label>Max Permit Hours</Form.Label>
              <Form.Control placeholder="2" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="streetformSweepingDays">
            <Form.Label>Sweeping Days</Form.Label>
            <Form.Control as="select" multiple>
              <option>Sunday</option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
            </Form.Control>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="streetformStartSweep">
              <Form.Label>Sweeping Start Hour</Form.Label>
              <Form.Control placeholder="8" />
            </Form.Group>
            <Form.Group as={Col} controlId="streetformEndSweep">
              <Form.Label>Sweeping End Hour</Form.Label>
              <Form.Control placeholder="10" />
            </Form.Group>
          </Form.Row>
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default StreetForm;
