/* eslint-disable jsx-a11y/anchor-is-valid */
import './Menu.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Menu = (): JSX.Element => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavDropdown title="File" id="file-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">New</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Open</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.3">Save</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Save As</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.5">Merge</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.6">Import</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.7">Export</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Options" id="options-nav-dropdown">
          <NavDropdown.Item href="#action/3.8">
            Select Study Mode
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.9">Reset Scores</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Menu
