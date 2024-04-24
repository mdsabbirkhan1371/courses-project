import PropTypes from 'prop-types';


const Course_Name = ({course,idx}) => {
    
    return (
        <div>                
            <ol>
                {idx+1}. {course}
            </ol>
        </div>
    );
};

Course_Name.propTypes={
    course: PropTypes.string,
    idx: PropTypes.number
}
export default Course_Name;