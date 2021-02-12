/* eslint-disable jsx-a11y/anchor-is-valid */
import './Menu.css'
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from 'react-bootstrap'

const Menu = () => {
  const toggleMenu = () => {
    const navToggle = document.getElementsByClassName('toggle')
    for (let i = 0; i < navToggle.length; i += 1) {
      navToggle?.item(i)?.classList.toggle('hidden')
    }
  }

  const toggleSubMenu = (subMenuId: string) => {
    console.log(`toggle ${subMenuId}`)
    // First close any open submenus
    const submenus = document.getElementsByClassName('submenu')

    if (submenus) {
      Array.from(submenus).forEach(submenu =>
        submenu.setAttribute('display', 'none')
      )
    }

    // Now toggle the desired menu
    const menu = document.getElementById(subMenuId)

    console.log(`toggle 1`)
    if (!menu) return

    const { display } = menu.style
    console.log(`toggle 2 display = ${display}`)

    if (display === 'none' || !display) {
      console.log(`toggle 3`)
      menu.style.display = 'flex'
    } else {
      console.log(`toggle 4`)
      menu.style.display = 'none'
    }
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Menu
