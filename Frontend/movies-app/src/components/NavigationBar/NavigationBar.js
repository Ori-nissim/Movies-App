import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Routes, Route } from 'react-router-dom';
import MovieList from '../movie-list/movie-list.component';
import MovieDetails from '../MovieDetail/MovieDetail';
export default function NavigationBar() {
    return (
        <div>
            <>

                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/">Movies</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

            </>
        </div>
    );
}
