import { useState } from 'react';
// import Course from './Course'
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'

function Courses({courses}) {
    const [index, setIndex] = useState(0);
    const{title,price,content} = courses[index]

    const checkIndex = (index) =>{
        debugger
        if(index < 0){
            return courses.length - 1;
        }
        if(index > courses.length - 1){
            return 0;
        }
        return index ;
            
    };

    const randomCoursesAssigment = () =>{
        let randomNumber = Math.floor(Math.random() * courses.length)
        if(randomNumber === index){
            randomNumber = index + 1;
        }
        setIndex(checkIndex(randomNumber))
    }
    
    const prevIcon = () =>{
        setIndex((index)=>{
            let newCourse = index - 1;
            return checkIndex(newCourse)
        })
    }
    const nextIcon = () =>{
        setIndex((index)=>{
            let newCourse = index + 1;
            return checkIndex(newCourse)
        })
    }
    return ( <div className="courseList">
        <div className='randomCourses'>
            <h2>Kurslarim :</h2>
            <button className='deleteButton' onClick={randomCoursesAssigment}>random course assignment</button>
            </div>
        <div className='cardDiv'>
            <button className='iconButton' onClick={prevIcon}>
                <FaChevronLeft/>
            </button>
        <div className="card">
        <div className="courseCard">
        <h3 className="courseTitle"><i>{title}</i></h3>
        <h5 className="coursePrice">{price}AZN</h5>
        </div>
        <p className="courseContent">{content}</p>
       
    </div>
            <button className='iconButton' onClick={nextIcon}>
                <FaChevronRight/>
            </button>
      
        </div>
    </div> );
}

export default Courses;