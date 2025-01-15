import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { BsHash } from "react-icons/bs";

function StudyCardsPage() {
    return (

        <main>
            <Container>

                <section>
                    <p className="fs-4 text-center">Study Cards</p>
                    <hr />
                    <div className="mb-3">
                        <Link to="/study-cards" className="btn btn-primary pb-2">Add New Study Card</Link>
                    </div>
                </section>

                <hr />

                <section>
                    <Row className="my-3">
                        <Col>
                            <button type="button" class="btn btn-secondary btn-lg">
                                <span><BsHash /></span>
                                Computer Science
                            </button>
                        </Col>
                        <Col>
                            <button type="button" class="btn btn-secondary btn-lg">
                                <span><BsHash /></span>
                                Computer Science
                            </button>
                        </Col>
                        <Col>
                            <button type="button" class="btn btn-secondary btn-lg">
                                <span><BsHash /></span>
                                Computer Science
                            </button>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col>
                            <button type="button" class="btn btn-secondary btn-lg">
                                <span><BsHash /></span>
                                Computer Science
                            </button>
                        </Col>
                        <Col>
                            <button type="button" class="btn btn-secondary btn-lg">
                                <span><BsHash /></span>
                                Computer Science
                            </button>
                        </Col>
                        <Col>
                            <button type="button" class="btn btn-secondary btn-lg">
                                <span><BsHash /></span>
                                Computer Science
                            </button>
                        </Col>
                    </Row>
                </section>

                <hr />

                <section>
                    <Row>
                        <Col>
                            <Card className="mb-3">
                                <Card.Body className="d-flex flex-column justify-content-center">
                                    <p>Status: Completed</p>
                                    <p>Study Card One</p>
                                    <p>Subject: Computer Science</p>
                                    <p>Course: Course</p>
                                    <p>Topic: topic</p>
                                    <p>Planned Date: Date</p>
                                    <Link to="/study-card/1" className="btn btn-secondary pb-2 my-2">Study Card One</Link>
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
                </section>

            </Container>
        </main>
    )
}

export default StudyCardsPage