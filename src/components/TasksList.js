import Task from './Task'
import React, { Component } from 'react';

const TaskList = (props) => {
    
    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);
    
    
    
   const activeTasks = active.map(task => {
        return(
        <Task key={task.id} task={task} change={props.change} delete={props.delete}/>)
    })
  
   const doneTasks = done.map(task => {
        return(
        <Task key={task.id} task={task} delete={props.delete}/>)
    })
    

    return ( <div>
        <hr/>
        <h2>Zadania do wykonania:</h2>
        {activeTasks}
        <hr/>
        <h2>Zadania wykonane ({doneTasks.length}):</h2>
        {doneTasks}
      
    </div> );
}
 
export default TaskList;