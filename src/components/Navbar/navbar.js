import react from 'react'
import {Nav, Navbar} from 'react-bootstrap'

function NavBar(){
    return(
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">MyFamily</Navbar.Brand>
                <Nav className="ml-auto">
                <Nav.Link active href="#home">Location</Nav.Link>
                <Nav.Link active href="#features">Events</Nav.Link>
                <Nav.Link active href="/groceries">Groceries</Nav.Link>
                <Nav.Link active href="#pricing">ToDo</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar