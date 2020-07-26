import React from "react";
import { Navbar } from "react-bootstrap";

const NavigationFooter = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="bottom"
    >
      <div>
        <Navbar.Text>Copyright 2020</Navbar.Text>
      </div>
    </Navbar>
  );
};

export default NavigationFooter;
