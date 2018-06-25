import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    // #1 - Start with defining state
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

  // #10 - cont.
  completeTodo(index) {
    const todos = this.state.todos.slice();
    todos[index].completed = true;
    this.setState({
      todos
    });
  }

  // #10 - cont.
  removeTodo(index) {
    const todos = this.state.todos.slice();
    todos.splice(index, 1);
    this.setState({
      todos
    });
  }

  // #5 cont.
  handleUserInput(val) {
    this.setState({
      userInput: val
    });
  }

  render() {
    // #2 - Destructure State
    const { todos, userInput } = this.state;

    // #6 - set up basic map and show name/completed, originally show how booleans won't render to the screen, and how this is a good use for a ternary
    // #8 - add filter and check to see if that name includes the userInput
    // #9 - add btn container and btns, ONLY show Complete task button for todos that are uncompleted (explain Logical && operator)
    // #10 - make functions and event handlers for complete task and remove task
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

    // #4 - make h1, input and delete basic starting tags
    // #5 - make event handler/function for userInput field
    // #7 - Render allTodos (map of state)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo App</h1>
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
