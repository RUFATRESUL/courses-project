import Course from './Course'
function Courses({courses,deleteCourse}) {
    // console.log(courses);
    return ( <div className="courseList">
        <div><h2>Courses :</h2></div>
        <div className='cardDiv'>
        {courses.map((course) =>{
            return(
            <Course key={course.id} {...course} removeCourse={deleteCourse}/>
            )
        })}
        </div>
    </div> );
}

export default Courses;