import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsHash } from "react-icons/bs";

function AddNewStudyCardPage() {
    return (
        <Container>

            <main>
                <button role='button' className='btn btn-danger'>Cancel</button>
                <p>Add New Study Card</p>

                <hr />

                <section>
                    <div class="row g-3 align-items-center my-2">
                        <div class="col-auto">
                            <label for="inputPassword6" class="col-form-label">Title: </label>
                        </div>
                        <div class="col-auto">
                            <input
                                type="password"
                                id="inputPassword6"
                                class="form-control"
                                aria-describedby="passwordHelpInline"
                                placeholder='Title'
                            />
                        </div>
                    </div>
                    <div class="row g-3 align-items-center my-2">
                        <div class="col-auto">
                            <label for="inputPassword6" class="col-form-label">Start Date: </label>
                        </div>
                        <div class="col-auto">
                            <input
                                type="date"
                                id="inputPassword6"
                                class="form-control"
                                aria-describedby="passwordHelpInline"
                                placeholder='Title'
                            />
                        </div>
                    </div>
                </section>

                <hr />

                <section>
                    <p>Study Days: </p>
                    <p>You can selects multiple Dates.</p>
                    <div>
                        <Row className="my-3">
                            <Col>
                                <button type="button" class="btn btn-secondary btn-lg">
                                    Mondays
                                </button>
                            </Col>
                            <Col>
                                <button type="button" class="btn btn-secondary btn-lg">
                                    Tuesdays
                                </button>
                            </Col>
                            <Col>
                                <button type="button" class="btn btn-secondary btn-lg">
                                    Wednesdays
                                </button>
                            </Col>
                            <Col>
                                <button type="button" class="btn btn-secondary btn-lg">
                                    Thursdays
                                </button>
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col>
                                <button type="button" class="btn btn-secondary btn-lg">
                                    Fridays
                                </button>
                            </Col>
                            <Col>
                                <button type="button" class="btn btn-secondary btn-lg">
                                    Saturdays
                                </button>
                            </Col>
                            <Col>
                                <button type="button" class="btn btn-secondary btn-lg">
                                    Sundays
                                </button>
                            </Col>
                            <Col></Col>
                        </Row>
                    </div>
                </section>

                <hr />

                <section>
                    <p>Topic Tag: </p>
                    <p>You can selects multiple Topic Tags.</p>
                    <div>
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
                    </div>
                </section>

                <hr />

                <section>
                    <button type="button" class="btn btn-primary btn-lg">Create Card</button>
                </section>

            </main>

        </Container>
    )
}

export default AddNewStudyCardPage