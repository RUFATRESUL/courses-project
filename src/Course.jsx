function Course({id,content,title,price,removeCourse}) {
    
    return ( <div className="card">
        <div className="courseCard">

        <h4 className="courseTitle"><i>{title}</i></h4>
        <h5 className="coursePrice">{price}AZN</h5>
        </div>
        <p className="courseContent">{content}</p>
        <button className="deleteButton" onClick={()=>removeCourse(id)}>Delete</button>
    </div> );
}

export default Course;