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
      id: null,
      searchInput: '', 
    }
  }

  componentWillMount() {
    localStorage.getItem('toDoListData') && this.setState({
      toDoList: JSON.parse(localStorage.getItem('toDoListData')),
    })
  }

  newInputHandler = (event) => {
    this.setState({ newItem: event.target.value });
  }

  addBtnHandler = (event) => {
    // console.log('It was clicked!!')
    const newTask = this.newTaskHandler();

    if(this.state.newItem !== '') {
      this.setState({
        toDoList: this.state.toDoList.concat(newTask),
        newItem: '',
      })   
    }
  }

  newTaskHandler = () => {
    const newTask = {
      task: this.state.newItem,
      id: Date.now(),
      completed: false,
    }
    return newTask;
  }

  addKeyHandler = (event) => {
    const newTask = this.newTaskHandler();

    if(event.key === 'Enter' && event.target.value !== '') {
      this.setState({
        toDoList: this.state.toDoList.concat(newTask),
        newItem: '',
      })
    }  
  }

  taskCompletedHandler = (event, id) => { 
    event.target.classList.add('done');
    this.setState(prevState => ({
      toDoList: prevState.toDoList.map(todo => {
        if(todo.id === id && todo.completed === false) {
          todo.completed = true;       
        }
        return todo;
      })
    }))
  }

  eraseTaskHandler = () => {
    this.setState(prevState => ({
      toDoList: prevState.toDoList.filter(todo => todo.completed === false) 
    }))
  }

  searchInputHandler = (event) => {
    this.setState({ 
      searchInput: event.target.value,
    });
  }

  searchTodoHandler = () => {
    let todoItem = this.state.toDoList.filter(todo => {
      return todo.task.toLowerCase().startsWith(this.state.searchInput.toLowerCase());
    })

    this.setState({
      toDoList: todoItem,  
    })
    // let oldTodo = this.state.toDoList.slice();
    // let updatedTodo = oldTodo.map(todo => {
    //   if(todoItem[0].id === todo.id) {
    //     oldTodo.slice(todo);
    //   }
    // })
    // let newTodo = [...todoItem, ...oldTodo]  
  }

  showTodosHandler = () => {
    this.setState({
      toDoList: toDoData,
    })
  }

  clearStorageData = () => {
    localStorage.clear();
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('toDoListData', JSON.stringify(nextState.toDoList))
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
          searchValue={this.state.searchInput}
          searchInput={this.searchInputHandler}
          search={this.searchTodoHandler}
          show={this.showTodosHandler}
          clearData={() => this.clearStorageData(window.location.reload())}
          />
      </div>
    );
  }
}

export default App;
