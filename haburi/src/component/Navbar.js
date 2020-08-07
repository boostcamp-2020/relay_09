import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const MyNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="primary" light expand="md">
        <NavbarBrand href="/">하부리</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* <NavItem>
              <form action="/hms/accommodations" method="GET">
                <div class="row">
                  <div class="">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search"
                        id="txtSearch"
                      />
                      <div class="input-group-btn">
                        <button class="btn btn-primary" type="submit">
                          <span class="glyphicon glyphicon-search"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </NavItem> */}
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://localhost:8080/">Chat</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Latta is horse</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MyNav;
