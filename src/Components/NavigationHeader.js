import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavDropdown, NavItem } from "react-bootstrap";
import { useSelector } from "react-redux";

const NavigationHeader = () => {
  const user = useSelector((state) => state.user);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <LinkContainer to="/">
        <div className="nav-brand-name">Park App</div>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end navbar-content-justify-right"
      >
        <Nav>
          <LinkContainer to="/">
            <Nav.Link className="nav-link-spacing">
              <i className="fa fa-home navbar-image" aria-hidden="true"></i>
              <div className="navbar-text">Home</div>
              <div className="navbar-select-marker" />
            </Nav.Link>
          </LinkContainer>

          <LinkContainer to="/park">
            <Nav.Link className="nav-link-spacing">
              <i
                className="fa fa-map-marker navbar-image"
                aria-hidden="true"
              ></i>
              <div className="navbar-text">Park</div>
              <div className="navbar-select-marker" />
            </Nav.Link>
          </LinkContainer>
          <div className="nav-link-special nav-link-spacing">
            <div className="nav-user-link">
              {user.image ? (
                <img
                  className="navbar-profile-image"
                  src={user.image}
                  alt="Profile"
                />
              ) : (
                <i className="fa fa-user navbar-image" aria-hidden="true"></i>
              )}
            </div>
            <div className="navbar-select-marker" />
            <NavDropdown
              title={user.firstName ? user.firstName : "User"}
              id="collasible-nav-dropdown"
              className="nav-dropdown-link"
            >
              <NavDropdown.Item>
                <LinkContainer to="/profile">
                  <NavItem>My Profile</NavItem>
                </LinkContainer>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {user.admin ? (
                  <LinkContainer to="/admin">
                    <NavItem>Admin</NavItem>
                  </LinkContainer>
                ) : (
                  ""
                )}
              </NavDropdown.Item>
              <NavDropdown.Item>
                <LinkContainer to="/help">
                  <NavItem>Help</NavItem>
                </LinkContainer>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href={process.env.REACT_APP_BACKEND_URL + "logout"}
              >
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationHeader;
