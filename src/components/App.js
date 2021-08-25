import React, { Component } from 'react';
import './App.css'
import TaskList from './TasksList';
import AddTask from './AddTask';

 class App extends Component {
   state = {  
     tasks: [
      { id: 0, text: 'zjesc obiad', date: '2021-07-15', important: true,active: true,finishDate: null},
      { id: 1, text: 'umyc sie', date: '2022-12-30', important: false,active: true,finishDate: null},
      { id: 2, text: 'kupoc warzywa', date: '2022-12-30', important: true,active: true,finishDate: null},
      { id: 3, text: 'oplacic rachunki', date: '2021-07-15', important: false,active: true,finishDate: null},
      { id: 4, text: 'policzyc kalorie', date: '2022-12-30', important: false,active: true,finishDate: null},
      { id: 5, text: 'sprawdzic trase', date: '2021-07-15', important: true,active: true,finishDate: null},
      { id: 6, text: 'umyc samochod', date: '2021-07-15', important: false,active: true,finishDate: null},
     ]
   }

   changeStatus = (id) => {
      let tasks = [...this.state.tasks];
      tasks.forEach(task => {
        if(task.id === id){
          task.active = false;
          task.finishDate = new Date().toLocaleTimeString() + ', ' + new Date().toLocaleDateString()
          console.log(task.finishDate)
        }
      })
      this.setState({
        tasks
      })
   }

   deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks= tasks.filter(task => task.id!== id)
    console.log(tasks)
    this.setState({
      tasks
    })
  
   }

   addTask= (text,date, important) => {
    
     const task = {
       id: this.state.tasks.length,
        text:text,
         date:date, 
         important:important,
          active:true, 
          finishDate:null 
     }
     this.setState({
      tasks: [...this.state.tasks,task]
     })
   }

   render() { 
     return (  
     <div className="App">
     TO DO APP by Bartsi<br/>
     <AddTask tasks={this.state.tasks} add={this.addTask}/>
     <TaskList tasks={this.state.tasks} change={this.changeStatus} delete={this.deleteTask}/>
     
     </div> );
   }
 }
  
 export default App;