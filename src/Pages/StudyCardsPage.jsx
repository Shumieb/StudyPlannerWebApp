import { Link } from "react-router-dom"
import { BsHash } from "react-icons/bs"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StudyCardCard from "../Components/StudyCardCard"

function StudyCardsPage() {
    return (

        <main>
            <Container>

                <section>
                    <p className="fs-4 text-center">Study Cards</p>
                    <hr />
                    <div className="mb-3">
                        <Link to="/new-study-card" className="btn btn-primary pb-2">Add New Study Card</Link>
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
                            <StudyCardCard />
                        </Col>
                        <Col>
                            <StudyCardCard />
                        </Col>
                        <Col>
                            <StudyCardCard />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <StudyCardCard />
                        </Col>
                        <Col>
                            <StudyCardCard />
                        </Col>
                        <Col>
                            <StudyCardCard />
                        </Col>
                    </Row>
                </section>

            </Container>
        </main>
    )
}

export default StudyCardsPage