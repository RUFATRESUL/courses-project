import { useState } from 'react';
// import Course from './Course'
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'

function Courses({courses,deleteCourse}) {
    const [index, setIndex] = useState(0);
    const{title,price,content} = courses[index]
    // console.log(courses);
    return ( <div className="courseList">
        <div><h2>Kurslarim :</h2></div>
        <div className='cardDiv'>
            <button className='iconButton'>
                <FaChevronLeft/>
            </button>
        <div className="card">
        <div className="courseCard">
        <h3 className="courseTitle"><i>{title}</i></h3>
        <h5 className="coursePrice">{price}AZN</h5>
        </div>
        <p className="courseContent">{content}</p>
       
    </div>
            <button className='iconButton'>
                <FaChevronRight/>
            </button>
      
        </div>
    </div> );
}

export default Courses;