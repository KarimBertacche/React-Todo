import React, {Component} from 'react';
// import TodoList from './components/TodoComponents/TodoList';

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

  addBtnHandler = () => {
      // console.log('It was clicked!!')
      const newTask = {
        task: this.state.newItem,
        id: Date.now(),
        completed: false,
      }

    this.setState({
      toDoList: toDoData.concat(newTask),
      newItem: '',
    })


  }
  

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
          <TodoList 
          toDoList={this.state.toDoList}
          newItem={this.state.newItem}
          addedInput={this.newInputHandler}
          addBtn={this.addBtnHandler}
          />
      </div>
    );
  }
}

function TodoList(props) {
  return (
    <div>
      {
        props.toDoList.map(el => {
          return <Todo key={el.id} task={el.task} />;
        })
      }
      <TodoForm newItem={props.newItem} addedItem={props.addedInput} addBtn={props.addBtn}/>
    </div>
  );
}

function Todo(props) {
  return (
    <div>{props.task}</div>
  );
}


function TodoForm(props) {
  return (
    <div>
      <input 
        type="text" 
        value={props.newItem} 
        onChange={props.addedItem}
        placeholder="Add Item" 
      />
      <button
        onClick={props.addBtn}
      >Add Item</button>
    </div>
      
  );
}

export default App;
