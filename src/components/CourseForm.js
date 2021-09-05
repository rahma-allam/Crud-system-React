import React from 'react';
const CourseForm = (props)=> {
    return(
        <div> 
          <form onSubmit={props.addCourse}>
            <input type="text" id='name' value={props.current} onChange={props.updatCourse}/>
            <button type="submit">Add Course</button>  
         </form>  
            
        </div>
    )
}
export default CourseForm ;