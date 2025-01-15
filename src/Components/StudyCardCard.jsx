import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"

function StudyCardCard() {
    return (
        <>
            <Card className="bg-primary text-white my-3">
                <Card.Body className="d-flex flex-column justify-content-center">
                    <p>Study Card One</p>
                    <p>Status: Completed</p>
                    <p>Subject: Computer Science</p>
                    <p>Course: Course</p>
                    <p>Topic: topic</p>
                    <p>Planned Date: Date</p>
                    <Link to="/study-card/1" className="btn btn-light pb-2 my-2">View</Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default StudyCardCard