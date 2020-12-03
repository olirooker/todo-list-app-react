import React from "react";
import Header from "./components/Header";
import List from "./components/List";
import TaskAdder from "./components/TaskAdder";

class App extends React.Component {
  state = {
    todos: [{ item: "The first item" }],
  };

  addToDo = (newItem) => {
    this.setState((currentState) => {
      const newState = { todos: [newItem, ...currentState.todos] };
      return newState;
    });
  };

  deleteToDo = (name) => {
    this.setState(previousState => {
      const newTasks = previousState.todos.filter(todo => {
        return todo.item !== name;
      })
      const newState = {
        todos: newTasks
      }
      return newState;
    })
  };

  render() {
    return (
      <div className="app-container">
        <Header />
        <TaskAdder addToDo={this.addToDo} />
        <List todos={this.state.todos} deleteToDo={this.deleteToDo} />
      </div >
    );
  }
}

export default App;
