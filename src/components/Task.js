import React, { Component } from 'react';

const Task = (props) => {
const {text,date,active,important, finishDate,id} = props.task;


  
if(active){
    return ( 
        <>
        <span ><strong style={important?{color:'red' }:null}>{text}</strong> - do {date} </span>
        <button onClick={() => props.change(id)}>Zrobione</button>
        <button onClick={() => props.delete(id)}>X</button>
        <br/>
        
        </>
     );}
     else{
     return(
     <>
        <span>{text} -<em style={{fontSize:13}}> wykonano: {finishDate}</em></span>
        <button onClick={() => props.delete(id)}>X</button>
        <br/>
        </>)
     }
}
 
export default Task;