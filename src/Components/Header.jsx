import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar bg="primary" data-bs-theme="dark" className="mb-4">
            <Container>
                <Navbar.Brand href="/">Study Planner App</Navbar.Brand>
                <Nav className="me-auto text-white">
                    <Nav.Link href="/" className="text-white">Home</Nav.Link>
                    <Nav.Link href="/study-cards" className="text-white">Study Cards</Nav.Link>
                    <Nav.Link href="/about" className="text-white">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header