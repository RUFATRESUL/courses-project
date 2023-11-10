import { useEffect,useState } from 'react';
import './App.css';
import axios from 'axios'
import Courses from './Courses'
import Loading from './Loading'

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const courseId = (id) =>{
    const afterDeleting = courses.filter((course) => course.id !== id);
    
    setCourses(afterDeleting);
  }

  const fetchCourses = async() =>{
    setLoading(true);
    try{

      const response = await axios.get('http://localhost:3004/courses')
      setCourses(response.data)
      setLoading(false)
    }
    catch(eror){
      setLoading(false)
    }
    // debugger
  }
  useEffect(() => {
    fetchCourses()
  }, [])
  
  return (
    <div className="App">
      {loading ? <Loading/> : (
        <>
        {courses.length ===0 ?
        <div className='updateCourses'>
          <h2>Courses have been deleted :</h2>
          <button className='deleteButton' onClick={()=>fetchCourses()}>Update</button>
        </div>
        :(<Courses courses={courses} deleteCourse={courseId}/>)
        }
        </>

      )}
    </div>
  );
}

export default App;
