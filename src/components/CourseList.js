import React, { Component, Fragment } from 'react';
class CourseList extends Component {
 


   state = {
      isEdit : false
   }
 // render course list
   renderCourse = ()=> {
    return(
   <li>
   <span>{this.props.details.name}</span>
   <button onClick = {()=> this.toggleState()}>Edit Course</button>
   <button onClick = {() => this.props.deletCourse(this.props.index)}> Delete Course </button>
   </li>
    )
 }

// update cource 
updateCourseItem=(e)=>{
   e.preventDefault()
this.props.editCourse(this.props.index ,this.input.value )
this.toggleState();
}
 // edit form 
 editForm = () => {
    return(
       <form  onSubmit={this.updateCourseItem} >
          <input type="text" ref={(v)=> this.input = v}  defaultValue={this.props.details.name}/>
          <button >Update Course</button>
       </form>
    )
 }


 // toggle stat
 toggleState = () => {
let {isEdit}=this.state;
this.setState({
   isEdit : ! isEdit
})
 }
 
 
   render(){
  return (
      
   <Fragment>
     { this.state.isEdit ?  this.editForm() : this.renderCourse()  }
   </Fragment>
  );
 }
}

export default CourseList;
