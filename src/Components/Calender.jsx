import { Link } from "react-router-dom"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Calender() {
    return (
        <section>
            <div className="d-flex justify-content-between align-content-center mb-3">
                <span role="button" className="text-primary fs-3"><BsArrowLeftCircleFill /></span>
                <p className="mb-0 pb-0 pt-2 fs-4">My Study Calender</p>
                <span role="button" className="text-primary fs-3"><BsArrowRightCircleFill /></span>
            </div>
            <div>
                <Row>
                    <Col>
                        <Card className="mb-3">
                            <Card.Header>Monday 13 September 2025</Card.Header>
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Link to="/study-card/1" className="btn btn-secondary pb-2 my-2">Study Card One</Link>
                                <Link to="/study-card/1" className="btn btn-secondary pb-2 my-2">Study Card Two</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mb-3">
                            <Card.Header>Monday 13 September 2025</Card.Header>
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Link to="/study-card/1" className="btn btn-secondary pb-2 my-2">Study Card One</Link>
                                <Link to="/study-card/1" className="btn btn-secondary pb-2 my-2">Study Card Two</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mb-3">
                            <Card.Header>Monday 13 September 2025</Card.Header>
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Link to="/study-card/1" className="btn btn-secondary pb-2 my-2">Study Card One</Link>
                                <Link to="/study-card/1" className="btn btn-secondary pb-2 my-2">Study Card Two</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mb-3">
                            <Card.Header>Monday 13 September 2025</Card.Header>
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Link to="/study-card/1" className="btn btn-secondary pb-2 my-2">Study Card One</Link>
                                <Link to="/study-card/1" className="btn btn-secondary pb-2 my-2">Study Card Two</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Calender