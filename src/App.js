import React, {Component} from 'react';
import './App.css';
import TodoList from './components/TodoComponents/TodoList';

const toDoData = [
  {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
  },
  {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
  }
];

class App extends Component {
  constructor(props) {
    super(props); 
    // you will need a place to store your state in this component.
    this.state = {
      toDoList: toDoData,
      newItem: '',
    }
  }

  newInputHandler = (event) => {
    this.setState({ newItem: event.target.value });
  }

  addBtnHandler = (event) => {
    // console.log('It was clicked!!')
    const newTask = {
      task: this.state.newItem,
      id: Date.now(),
      completed: false,
    }

    if(this.state.newItem !== '') {
      this.setState({
        toDoList: this.state.toDoList.concat(newTask),
        newItem: '',
      })   
    }
  }

  addKeyHandler = (event) => {
    const newTask = {
      task: this.state.newItem,
      id: Date.now(),
      completed: false,
    }

    if(event.key === 'Enter' && event.target.value !== '') {
      this.setState({
        toDoList: this.state.toDoList.concat(newTask),
        newItem: '',
      })
    }  
  }

  taskCompletedHandler = (event) => {  
    event.target.classList.toggle('done');
  }

  eraseTaskHandler = (event) => {
    console.log();
    // if(event.target.className === 'done') {
    
    // }
  }

  render() {
    return (
      <div className="todo-wrapper">
        <h2 className="title">Todo List</h2>
          <TodoList 
          toDoList={this.state.toDoList}
          newItem={this.state.newItem}
          addedInput={this.newInputHandler}
          addBtn={this.addBtnHandler}
          addKey={this.addKeyHandler}
          clicked={this.taskCompletedHandler}
          delete={this.eraseTaskHandler}
          // completed={this.props.completed}
          />
      </div>
    );
  }
}

export default App;
