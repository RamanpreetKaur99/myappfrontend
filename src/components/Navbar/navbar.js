import react from 'react'
import {Nav, Navbar} from 'react-bootstrap'

function NavBar(){
    return(
        <div>
            <Navbar bg="primary" variant="dark" style={{minHeight:'4em',fontSize:'large'}}>
                <Navbar.Brand href="/"><b>TheFamilyApp</b></Navbar.Brand>
                <Nav className="ml-auto">
                <Nav.Link active href="/bills"><b>Bills</b></Nav.Link>
                <Nav.Link active href="/events"><b>Events</b></Nav.Link>
                <Nav.Link active href="/groceries"><b>Groceries</b></Nav.Link>
                <Nav.Link active href="/todos"><b>ToDos</b></Nav.Link>
                <Nav.Link active href="/location"><b>Location</b></Nav.Link>
                <Nav.Link active href="/todos"><b>Gaming</b></Nav.Link>
                <Nav.Link active href="/register"><b>Register</b></Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar