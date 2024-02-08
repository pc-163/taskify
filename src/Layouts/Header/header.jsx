import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Link to='/' className='tag-c'>TASKIFY</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                     {//<Navbar.Collapse id="basic-navbar-nav">
                    //     <Nav className="me-auto">
                    //         {//<Nav.Link href="#home">Dashboard</Nav.Link>
                    //             // <Nav.Link href="#link">Recent Task</Nav.Link>
                    //             // <Nav.Link href="#link">Recent Task</Nav.Link>
                    //             // <Nav.Link href="#link">High Task</Nav.Link>
                    //             // <Nav.Link href="#link">Closed Task</Nav.Link>
                    //             // <Nav.Link href="#link">Task Category</Nav.Link>
                    //             // <Nav.Link href="#link">Filter</Nav.Link>
                    //             // <i className="fa-regular fa-user"></i>
                    //             // Logout
                    //         }
                    //         <Link to='/signup'><Button>SignUp</Button></Link>
                    //         <Link to='/login'><Button>Login</Button></Link>
                    //     </Nav>
                     // </Navbar.Collapse>
                    }
                </Container>
            </Navbar>

        </>
    )
}

export default Header