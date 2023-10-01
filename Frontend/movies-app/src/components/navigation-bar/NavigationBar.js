import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth.context';

export default function NavigationBar() {

    const { user,setUser } = useContext(AuthContext);

    const content = user === "Guest" ?
    <Navbar.Text className="ms-auto" >
       Not Signed in
    </Navbar.Text>
    : 
    <Navbar.Text className="ms-auto" >
        Signed in as:  <a href="login">{user}</a>
    </Navbar.Text>;

    function logoutUser() { 
        setUser("Guest");
    }

    return (
        <div>
            <>

                <Navbar className="fixed-top" bg="dark" data-bs-theme="dark">
                    <Container >
                        <Navbar.Brand as={Link} to="/">Movies</Navbar.Brand>
                        <Nav className="container-fluid">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link href="login">Login</Nav.Link>
                            <Nav.Link href="register">Register</Nav.Link>
                            {content}
                            {user !== "Guest" && <Button onClick={logoutUser} variant="outline-danger">Logout</Button>}
                        </Nav>
                    </Container>
                </Navbar>

            </>
        </div>
    );
}
