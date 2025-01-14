import Container from 'react-bootstrap/Container';

function Footer() {
    return (
        <footer className="bg-primary text-white mt-4">
            <Container className='d-flex justify-content-center align-content-center pt-2'>
                <p className='fs-5 mx-2'>&copy; 2025</p>
                <p className='fs-5 mx-2'>Created by Shumie.</p>
            </Container>
        </footer>
    )
}

export default Footer