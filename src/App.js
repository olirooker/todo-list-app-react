import React from "react";
import Filter from "./components/Filter";
import Header from "./components/Header";
import List from "./components/List";
import TaskAdder from "./components/TaskAdder";


class App extends React.Component {
  state = {
    todos: [{ item: "The first item", isCompleted: false, }],
    filterBy: 'all', // this would change depending on which button is pressed
  };

  // componentDidMount() {
  //   const savedState = JSON.parse(localStorage.getItem("state"));
  //   this.setState(savedState);
  // };

  // componentDidUpdate() {};

  addToDo = (newItem) => {
    this.setState((currentState) => {
      const newState = { todos: [newItem, ...currentState.todos] };
      return newState;
    }
      // , () => {
      //   localStorage.setItem("state", JSON.stringify(this.state));
      // }
    );
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
    }
      // , () => {
      //   localStorage.setItem("state", JSON.stringify(this.state));
      // }
    )
  };

  toggleIsCompleted = () => {

  };

  changeFilter = (condition) => {
    this.setState(currentState => {
      return { filterBy: condition }
      // const newState = { filterBy: condition }
      // console.log(newState)
      // console.log(this.state)
      // return newState;
    })
  };

  // method here which will change the filterBy to complete, all or active

  render() {
    return (
      <div className="app-container">
        <Header />
        <TaskAdder addToDo={this.addToDo} />
        <Filter changeFilter={this.changeFilter} />
        <List todos={this.state.todos} deleteToDo={this.deleteToDo} toggleIsCompleted={this.toggleIsCompleted} />
      </div >
    );
  };
}

export default App;
