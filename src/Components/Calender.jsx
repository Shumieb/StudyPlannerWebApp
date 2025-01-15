import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CalenderDateCard from "./CalenderDateCard";

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
                        <CalenderDateCard />
                    </Col>
                    <Col>
                        <CalenderDateCard />
                    </Col>
                    <Col>
                        <CalenderDateCard />
                    </Col>
                    <Col>
                        <CalenderDateCard />
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Calender