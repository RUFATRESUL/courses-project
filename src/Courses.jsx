import { useState } from 'react';
// import Course from './Course'

function Courses({courses,deleteCourse}) {
    const [index, setIndex] = useState(1)
   const {title,price,content} = courses[index];
    return ( <div className="courseList">
        <div><h2>Courses :</h2></div>
        <div className="card">
        <div className="courseCard">
        <h3 className="courseTitle"><i>{title}</i></h3>
        <h5 className="coursePrice">{price}AZN</h5>
        </div>
        <p className="courseContent">{content}</p>
        {/* <button className="deleteButton" onClick={()=>removeCourse(id)}>Delete</button> */}
    </div>
        
        {/* {courses.map((course) =>{
            return(
            <Course key={course.id} {...course} removeCourse={deleteCourse}/>
            )
        })} */}
        </div>
    );
}

export default Courses;