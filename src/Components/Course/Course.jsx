import PropTypes from 'prop-types';
import { IoLogoUsd } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";


const Course = ({course,handleAddCourse}) => {
    // console.log(course)
    const {id,course_details,course_name,credit_hr,img,price}=course;
    return (
        <div >
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={img} alt="Shoes" />
                </figure>
                    <div className="card-body">
                        <h2 className="card-title text-xl">{course_name}</h2>
                        <p>{course_details.description.slice(0,75)}</p>

                        <div className='flex' >

                            <p className='flex  items-center mr-1'><IoLogoUsd /><span> Price : {price}  </span>
                            </p>
                            
                            <p className='flex   items-center '><FaBookOpen />
                            <span className='ml-1'> Credit : {credit_hr} hr  </span>
                            </p>
                            
                        </div>
                                            

                        <div className="card-actions">
                            <button onClick={()=>handleAddCourse(course_name)} className="btn btn-primary w-full">Select</button>
                        </div>  
                    </div>
            </div>
        </div>
    );
};

Course.propTypes={
    course: PropTypes.object.isRequired,
    handleAddCourse: PropTypes.func
}
export default Course;