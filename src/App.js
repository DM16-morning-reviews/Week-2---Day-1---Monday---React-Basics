import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: "laundry",
          completed: false
        },
        {
          name: "dishes",
          completed: false
        },
        {
          name: "cook dinner",
          completed: true
        },
        {
          name: "buy groceries",
          completed: true
        }
      ],
      userInput: ""
    };
  }

  completeTodo(index) {
    const todos = this.state.todos.slice();
    todos[index].completed = true;
    this.setState({
      todos
    });
  }

  removeTodo(index) {
    const todos = this.state.todos.slice();
    todos.splice(index, 1);
    this.setState({
      todos
    });
  }

  handleUserInput(val) {
    this.setState({
      userInput: val
    });
  }

  render() {
    const { todos, userInput } = this.state;

    let allTodos = todos.filter(e => e.name.includes(userInput)).map((e, i) => {
      return (
        <div key={i} className="todo">
          <h2>{e.name}</h2>
          <h4>{e.completed ? "Completed: true" : "Completed: false"}</h4>
          <div className="todo-buttons-container">
            {!e.completed && (
              <button
                className="todo-buttons"
                onClick={() => this.completeTodo(i)}
              >
                Complete Task
              </button>
            )}
            <button className="todo-buttons" onClick={() => this.removeTodo(i)}>
              Remove Task
            </button>
          </div>
        </div>
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to our Awesome to Todo App</h1>
        </header>
        <h1>All Todos</h1>
        <input
          placeholder="Search for Todo"
          onChange={e => this.handleUserInput(e.target.value)}
        />
        <div className="todos-container">{allTodos}</div>
      </div>
    );
  }
}

export default App;
