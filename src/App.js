import React, { Component } from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
class App extends Component {


  state = {
    courses : [
      {name : 'HTML'},
      {name : 'CSS'},
      {name : 'jQuery'},
    ], 
    current: ''
  }  
  
  // update course
  updatCourse = (e)=>{
    this.setState({current : e.target.value})
  }

  // add course 
  addCourse = (e)=> {
      e.preventDefault();
      if( e.target.name.value === '' )
      {
          return   false
     }
      else {
        let {current}= this.state;
        let {courses} = this.state;
        courses.push({name: current});
        this.setState({
          courses,
          current: ''
        })
     
      }
  }

  // delete course

  deletCourse= (index) =>{
    let courses = this.state.courses;
    courses.splice(index,1);
    this.setState({
      courses
    })
  }
  //edit course 
  editCourse = (index,value)=>{
      let {courses} = this.state;
      let course = courses[index];
      course['name'] = value;
      console.log (course)
      this.setState({
        courses 
      })
  }





 render(){
   const {courses}= this.state;
   const courseList = courses.map( (course , index) =>{
  
    return (
        <CourseList details ={course}  key={index} index={index}  deletCourse={this.deletCourse} updatCourse={this.updatCourse}
        editCourse={this.editCourse}/>
      )
   }  
   )
   

  return (
    <section className="App">
      <h2>Add Course</h2>
      <CourseForm current={this.state.current} 
      updatCourse={this.updatCourse} 
      addCourse={this.addCourse}
      />
      <ul> {courseList} </ul>      
     
    </section>
  );
 }
}

export default App;
