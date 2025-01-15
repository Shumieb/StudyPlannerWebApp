import Card from 'react-bootstrap/Card'
import StudyCardCard from './StudyCardCard'

function CalenderDateCard() {
    return (
        <>
            <Card className="mb-3">
                <Card.Header>Monday 13 September 2025</Card.Header>
                <Card.Body className="d-flex flex-column justify-content-center">
                    <StudyCardCard />
                    <StudyCardCard />
                    <StudyCardCard />
                </Card.Body>
            </Card>
        </>
    )
}

export default CalenderDateCard