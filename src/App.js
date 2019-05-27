import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    people: [
      {name: 'Greg', age: 420},
      {name: 'Rangle', age: 30},
      {name: 'Dangle', age: 28}
    ]
  }

  switchNameHandler = () => {
    //console.log('Was clicked!');
    // DON'T DO THIS: this.state.people[0].name = 'Mega Greg';
    this.setState({
      people: [
        {name: 'Greg', age: 840},
        {name: 'Rangle', age: 69},
        {name: 'Dangle', age: 360}
      ],
      interest: 'maXimum whippag3'
    })
  }

  render() {
    return (
      <div className="App">
        <h1>I'm a Dingus!</h1>
        <p>Man this is working, dawg</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.people[0].name} age={this.state.people[0].age} danger="Maximum" />
        <Person name={this.state.people[1].name} age={this.state.people[1].age} >My Hobbies: Looting </Person>
        <Person name={this.state.people[2].name} age={this.state.people[2].age} >{this.state.interest} </Person>
<<<<<<< HEAD
        <Person />
        <Person />
=======
>>>>>>> testBranch
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now?'))
  }
}

export default App;
