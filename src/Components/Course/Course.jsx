
const Course = ({course}) => {
    console.log(course)
    const {course_details,course_name,credit_hr,img,price}=course;
    return (
        <div >
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={img} alt="Shoes" />
                </figure>
                    <div className="card-body">
                        <h2 className="card-title">{course_name}</h2>
                        <p>{course_details.description.slice(0,75)}</p>

                        <div className="card-actions">
                            <button className="btn btn-primary w-full">Select</button>
                        </div>  
                    </div>
            </div>
        </div>
    );
};

export default Course;