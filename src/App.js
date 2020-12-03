import React from "react";
import Header from "./components/Header";
import List from "./components/List";
import TaskAdder from "./components/TaskAdder";

class App extends React.Component {
  state = {
    todos: [{ item: "The first item" }],
  };

  componentDidMount() {
    const savedState = JSON.parse(localStorage.getItem("state"));
    this.setState(savedState);
  };

  addToDo = (newItem) => {
    this.setState((currentState) => {
      const newState = { todos: [newItem, ...currentState.todos] };
      localStorage.setItem("state", JSON.stringify(this.state));
      return newState;
    });
    // localStorage.setItem("state", JSON.stringify(this.state));
  };

  deleteToDo = (name) => {
    this.setState(previousState => {
      const newTasks = previousState.todos.filter(todo => {
        return todo.item !== name;
      })
      const newState = {
        todos: newTasks
      }
      localStorage.setItem("state", JSON.stringify(this.state));
      return newState;
    })
    // localStorage.setItem("state", JSON.stringify(this.state));
  };

  render() {
    return (
      <div className="app-container">
        <Header />
        <TaskAdder addToDo={this.addToDo} />
        <List todos={this.state.todos} deleteToDo={this.deleteToDo} />
      </div >
    );
  };
}

export default App;
