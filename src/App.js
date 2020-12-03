import React from "react";
import Header from "./components/Header";
import List from "./components/List";
import TaskAdder from "./components/TaskAdder";

class App extends React.Component {
  state = {
    tasks: [{ task: "The first task" }],
  };

  addTask = (newTask) => {
    this.setState((currentState) => {
      const newState = { tasks: [newTask, ...currentState.tasks] };
      return newState;
    });
  };

  deleteTask = (name) => {
    console.log(name)
    this.setState(previousState => {

      const newTasks = previousState.tasks.filter(task => {
        return task.task !== name;
      })
      console.log(newTasks)

      const newState = {
        tasks: newTasks
      }

      return newState;

    })
  };

  render() {
    return (
      <div className="app-container">
        <Header />
        <TaskAdder addTask={this.addTask} />
        <List tasks={this.state.tasks} deleteTask={this.deleteTask} />

      </div >
    );
  }
}

export default App;
