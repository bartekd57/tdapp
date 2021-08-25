import React, { Component } from 'react';

class AddTask extends Component {
actualDate = new Date().toLocaleDateString('fr-CA')

    state = { 
        id:'',
        text:'',
        date: this.actualDate,
        important:false,
        active: true,
        defaultDate: new Date().toLocaleDateString()

        
        
     }

 changeDate = (e) => {
     this.setState({
         date: e.target.value
        
     })
 }
 changeText = (e) => {
     this.setState({
         text: e.target.value
     })
 }
 changeCheckbox = (e) => {
    this.setState({
        important: e.target.checked
    })
}

addTaskFunc = () => {
  const {text,date, important} = this.state
  const add = this.props.add(text,date,important);

        this.setState({
            text: '',
            checked: false,
            date: this.actualDate
        })
    
}
 
 

    render() { 
        return ( <>
        <hr/>
        <input type='text' placeholder='dodaj zadanie' onChange={this.changeText}/>
        <input type='checkbox' onChange={this.changeCheckbox}/>
        <label>Priorytetowe</label>
        <br/><br/>
        <label>Do kiedy wykonać     </label>
        
        <input type='date'  value={this.state.date} onChange={this.changeDate} />
        <br/>
        <button onClick={this.addTaskFunc}>DODAJ</button>
        </> );
    }
}
 
export default AddTask;