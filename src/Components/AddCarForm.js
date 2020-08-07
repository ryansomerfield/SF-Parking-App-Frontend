import React, { useState } from "react";
import { Form, Col, Button, Modal } from "react-bootstrap";

const AddCarForm = (props) => {
  const onSubmit = props.onFormSubmit;
  const show = props.showModal;
  const handleClose = props.handleClose;
  const [formValue, setformValue] = useState({
    nickname: "Nickname",
    color: "Black",
    carType: "Sedan",
    year: "2020",
    make: "Make",
    model: "Model",
    licensePlate: "xxx-xxx",
  });
  const changeFormValue = (e) => {
    setformValue({
      ...formValue,
      [e.target.id]: e.target.value,
    });
  };
  const submitForm = () => {
    onSubmit(formValue);
  };
  return (
    <>
      <Form>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Car</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-border">
              <Form.Row>
                <Form.Group as={Col} controlId="nickname">
                  <Form.Label>Car Nickname</Form.Label>
                  <Form.Control
                    placeholder="Nickname"
                    onChange={changeFormValue}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="color">
                  <Form.Label>Color</Form.Label>
                  <Form.Control
                    placeholder="Black"
                    onChange={changeFormValue}
                  ></Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="carType">
                  <Form.Label>Car Type</Form.Label>
                  <Form.Control as="select" onChange={changeFormValue}>
                    <option>Sedan</option>
                    <option>Hatchback</option>
                    <option>Coupe</option>
                    <option>Roadster</option>
                    <option>Supercar</option>
                    <option>SUV</option>
                    <option>MiniVan</option>
                    <option>Pickup</option>
                    <option>Van</option>
                    <option>Camper</option>
                    <option>Truck</option>
                    <option>Motorcycle</option>
                    <option>Scooter</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="year">
                  <Form.Label>Year</Form.Label>
                  <Form.Control as="select" onChange={changeFormValue}>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                    <option>2015</option>
                    <option>2014</option>
                    <option>2013</option>
                    <option>2012</option>
                    <option>2011</option>
                    <option>2010</option>
                    <option>2009</option>
                    <option>2008</option>
                    <option>2007</option>
                    <option>2006</option>
                    <option>2005</option>
                    <option>2004</option>
                    <option>2003</option>
                    <option>2002</option>
                    <option>2001</option>
                    <option>2000</option>
                    <option>1999</option>
                    <option>1998</option>
                    <option>1997</option>
                    <option>1996</option>
                    <option>1995</option>
                    <option>1994</option>
                    <option>1993</option>
                    <option>1992</option>
                    <option>1991</option>
                    <option>1990</option>
                    <option>1989</option>
                    <option>1988</option>
                    <option>1987</option>
                    <option>1986</option>
                    <option>1985</option>
                    <option>1984</option>
                    <option>1983</option>
                    <option>1982</option>
                    <option>1981</option>
                    <option>1980</option>
                    <option>1979</option>
                    <option>1978</option>
                    <option>1977</option>
                    <option>1976</option>
                    <option>1975</option>
                    <option>1974</option>
                    <option>1973</option>
                    <option>1972</option>
                    <option>1971</option>
                    <option>1970</option>
                    <option>1969</option>
                    <option>1968</option>
                    <option>1967</option>
                    <option>1966</option>
                    <option>1965</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="make">
                  <Form.Label>Make</Form.Label>
                  <Form.Control placeholder="Make" onChange={changeFormValue} />
                </Form.Group>

                <Form.Group as={Col} controlId="model">
                  <Form.Label>Model</Form.Label>
                  <Form.Control
                    placeholder="Model"
                    onChange={changeFormValue}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="licensePlate">
                  <Form.Label>License Plate</Form.Label>
                  <Form.Control
                    placeholder="###-###"
                    onChange={changeFormValue}
                  />
                </Form.Group>
              </Form.Row>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={submitForm}>
              Add Car
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </>
  );
};

export default AddCarForm;
