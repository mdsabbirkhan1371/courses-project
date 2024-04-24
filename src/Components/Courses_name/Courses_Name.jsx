import Course_Name from "./Course_name/Course_Name";
import PropTypes from 'prop-types';

const Courses_Name = ({addCourses}) => {
    // console.log(addCourses)
    return (
        <div className="md:w-1/3 p-6 rounded-2xl bg-gray-800 text-2xl font-semibold space-y-3">
            <h1 className="text-red-600">Credit Hour Remaining hr</h1>
            <hr />

            <h3 className="">Course Name : {addCourses.length}</h3>


                {
                   addCourses.map((course,idx)=><Course_Name key={idx} course={course} idx={idx}></Course_Name>) 
                }
          
            
        </div>
    );
};
Courses_Name.propTypes={
    addCourses: PropTypes.array
}
export default Courses_Name;