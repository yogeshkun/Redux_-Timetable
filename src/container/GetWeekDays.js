import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { weekDays } from '../redux/actions/Actions';
import axios from "axios";
import GetTimeTable from "./GetTimeTable"
import {

    Container,
    Row,
    Col,
    Nav
} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

export default function TimeTable() {
    const Weeks = useSelector((state) => state.showweekdays.GetWeekDaysResult);
    const dispatch = useDispatch();

    const GetWeekDays = async () => {
        const data = { "asSchoolId": "120", "asAcademicYearId": "8" }
        const response = await axios
            .post('http://schoolapp.aaditechnology.com/MobileService.svc/School/GetWeekDays', data)
        dispatch(weekDays(response.data));
        //console.log(response.data)
    }

    useEffect(() => {
        GetWeekDays()
    }, [])
    return (

        <Row>
            <Router>
                <Container fluid>
                    <Row >
                        <Nav justify variant="tabs">
                            {
                                (Weeks === undefined) ?
                                    null
                                    :
                                    Weeks.map((Week) =>

                                        <Nav.Item>
                                            <Nav.Link>
                                                <Link
                                                    to={"/Days/" + Week.WeekDay}
                                                    style={{
                                                        textDecoration: 'none'

                                                    }}
                                                >

                                                    {Week.WeekDay}

                                                </Link>
                                            </Nav.Link>
                                        </Nav.Item>

                                    )
                            }


                        </Nav>
                    </Row>
                </Container>

                <Col className="section-right">

                    <Switch>
                        <Route path="/" exact component={GetTimeTable} />
                        <Route path="/Days/:WeekDay" exact component={GetTimeTable} />

                    </Switch>
                </Col>

            </Router>

        </Row>

    )
}
