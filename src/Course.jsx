function Course({id,content,title,price,removeCourse}) {
    
    return ( <div className="card">
        <div className="courseCard">

        <h3 className="courseTitle"><i>{title}</i></h3>
        <h5 className="coursePrice">{price}AZN</h5>
        </div>
        <p className="courseContent">{content}</p>
        <button className="deleteButton" onClick={()=>removeCourse(id)}>Delete</button>
    </div> );
}

export default Course;