import { Link } from "react-router-dom"

import Container from 'react-bootstrap/Container';
import Calender from "../Components/Calender";

function HomePage() {

    // get today's date
    let date = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();

    //console.log(date, month, year);

    return (
        <main>
            <Container>

                <section>
                    <p className="fs-4 text-center">Hello UserName</p>
                    <p className="fs-4 text-center">Today is {date}/{month + 1}/{year}</p>
                    <p className="fs-5 text-center">You have 3 Study Cards Due Today</p>
                </section>

                <section className="mb-3 text-end">
                    <Link to="/study-cards" className="btn btn-primary pb-2">View All Study Cards</Link>
                </section>

                <Calender />

            </Container>
        </main>
    )
}

export default HomePage