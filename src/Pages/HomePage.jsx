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
                    <p>Hello UserName</p>
                    <p>Today is {date}/{month + 1}/{year}</p>
                </section>

                <section className="mb-3">
                    <Link to="/study-cards" className="btn btn-primary pb-2">View All Study Cards</Link>
                </section>

                <Calender />

            </Container>
        </main>
    )
}

export default HomePage