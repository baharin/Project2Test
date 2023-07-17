import React from "react";
import Counter from "../Counter";
import Stepper1 from "../Stepper1";
import { Form } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import PageNavbar from "../PageNavbar";

function Reserve2(){

    const groups = [
        {course: 'English', date: 'Mon-Tue', time: '10am-12pm'},
        {course: 'English', date: 'Fri-Sat', time: '2pm-4pm'},
        {course: 'Math', date: 'Mon-Tue', time: '10am-12pm'},
        {course: 'Science', date: 'Mon-Tue', time: '10am-12pm'},
    
      ];

    const courses = ['English', 'Math', 'Science'];  

    const [selectedCourse, SetSelectedCourse] = useState('');
    
    const filteredGroups = groups.filter((group) => group.course === selectedCourse);
    
    const handleCourseChange = (e) => {

        const selectedCourse = e.target.value;
        SetSelectedCourse(selectedCourse);

    }


    return(

        <div>
            <PageNavbar/>
            
            <h2 className="text-center">Choose a study group</h2>

            <Stepper1 activestep={1}></Stepper1>


            <Form>

                <Form.Group className = "mb-3">
                <Form.Label>Select a course</Form.Label>
                <Form.Select onChange={handleCourseChange}>
                    
                    <option value="">-- Select a Course --</option>
                    {courses.map((course) => 
                    (
                        <option key={course} value={course}>{course}</option>
                    )
                    )}
                    
                </Form.Select>    
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label>
                        Select a Date and Time
                    </Form.Label>
                    <Form.Select>

                        <option value=""> -- Select a Date and Time --  </option>
                        {
                            filteredGroups.map((group, index) => (

                                <option key={index}>{group.date} at {group.time}</option>

                            ))


                        }
                    </Form.Select>


                </Form.Group>


                <Button variant = 'primary' href= "/Project2">
                        Cancel
                </Button>
                <Button variant = 'primary' href= "/Project2/Reserve">
                        Back
                </Button>
                <Button variant = 'primary' href= "/Project2/Confirmation">
                        Next
                </Button>




            </Form>


        </div>

    );

}

export default Reserve2;