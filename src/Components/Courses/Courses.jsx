import { useEffect, useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Courses = ({handleAddCourse}) => {

    const [courses,setCourses]=useState([])
    useEffect(()=>{
        fetch('courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div className="w-2/3  p-6 m-8">
            <h3 className="text-2xl underline font-semibold m-6">All Courses :</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                courses.map(course=><Course handleAddCourse={handleAddCourse} key={course.id} course={course}></Course>)
            }
            </div>

        </div>
    );
};

Courses.propTypes={
    handleAddCourse: PropTypes.func
}
export default Courses;