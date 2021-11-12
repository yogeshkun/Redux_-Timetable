import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getTimeTable } from '../redux/actions/Actions';
import axios from "axios";
import {
    Table
} from 'react-bootstrap';
function GetTimeTable() {
    const { WeekDay } = useParams();
    const TimeTable = useSelector((state) => state.showtimetable.GetTimeTableResult);
    const dispatch = useDispatch();

    const GetTimeTable = async () => {
        const data = {
            "asStandardDivId": "86",
            "asTeacherId": 0,
            "asIsTeacher": 0,
            "asAcademicYearId": "8",
            "asSchoolId": "120"
        }
        const response = await axios
            .post('http://schoolapp.aaditechnology.com/MobileService.svc/Student/GetTimeTable', data)
        dispatch(getTimeTable(response.data));


    }
    //console.log("TimeTable", TimeTable)
    useEffect(() => {
        GetTimeTable()
    }, [])
    return (
        <>

            <Table striped bordered hover variant="dark" responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>WeekDay</th>
                        <th>LectureNumber</th>
                        <th>Subject</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (TimeTable === undefined) ?
                            null
                            :
                            TimeTable.TimeTableList.map((Week) =>
                                (WeekDay === Week.WeekDay) ?


                                    <tr >
                                        <td>{Week.WeekDayId}</td>
                                        <td>{Week.WeekDay}</td>
                                        <td>{Week.LectureNumber}</td>
                                        <td>{Week.Subject}</td>
                                    </tr>




                                    :
                                    null

                            )
                    }


                </tbody>
            </Table>

        </>
    )
}

export default GetTimeTable
