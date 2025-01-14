import { Link } from "react-router-dom"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Calender() {
    return (
        <section>
            <div>
                <span className="text-primary fs-3"><BsArrowLeftCircleFill /></span>
                <div>
                    <p>Calender</p>
                    <hr />
                </div>
                <span className="text-primary fs-3"><BsArrowRightCircleFill /></span>
            </div>
            <div>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>Monday 13 September 2025</Card.Header>
                            <Card.Body>
                                <Card.Title> Card Title </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Header>Monday 13 September 2025</Card.Header>
                            <Card.Body>
                                <Card.Title> Card Title </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Header>Monday 13 September 2025</Card.Header>
                            <Card.Body>
                                <Card.Title> Card Title </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Header>Monday 13 September 2025</Card.Header>
                            <Card.Body>
                                <Link to="/study-card/1" className="btn btn-secondary pb-2">View All Study Cards</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Calender