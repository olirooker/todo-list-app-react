import React from "react";
import Filter from "./components/Filter";
import Header from "./components/Header";
import List from "./components/List";
import TaskAdder from "./components/TaskAdder";

class App extends React.Component {
  state = {
    todos: [{ item: "Start a todo list", isCompleted: false }],
    filterBy: "all",
  };

  // componentDidMount() {
  //   const savedState = JSON.parse(localStorage.getItem("state"));
  //   this.setState(savedState);
  // };

  componentDidUpdate() {
    return this.filterList();
  }

  addToDo = (newItem) => {
    this.setState(
      (currentState) => {
        const newState = { todos: [newItem, ...currentState.todos] };
        return newState;
      }
      // , () => {
      //   localStorage.setItem("state", JSON.stringify(this.state));
      // }
    );
  };

  deleteToDo = (name) => {
    this.setState(
      (previousState) => {
        const newToDos = previousState.todos.filter((todo) => {
          return todo.item !== name;
        });
        const newState = {
          todos: newToDos,
        };
        return newState;
      }
      // , () => { console.log(this.state) }
      // , () => {
      //   localStorage.setItem("state", JSON.stringify(this.state));
      // }
    );
  };

  toggleIsCompleted = (id) => {
    this.setState(
      (previousState) => {
        const newToDos = previousState.todos.map((todo) => {
          if (todo.item === id) {
            const newTodo = {
              item: todo.item,
              isCompleted: !todo.isCompleted,
            };
            return newTodo;
          } else return todo;
        });
        const newState = {
          todos: newToDos,
        };
        return newState;
      },
      () => {
        console.log(this.state);
      }
      // , () => {
      //   localStorage.setItem("state", JSON.stringify(this.state));
      // }
    );
  };

  changeFilter = (condition) => {
    this.setState({ filterBy: condition });
  };

  // move the filterList into the List file and filter the props before it hits the map.

  filterList = () => {
    return this.state.todos.filter((todo) => {
      if (this.state.filterBy === "all") return todo;
      else if (this.state.filterBy === "active")
        return todo.isCompleted === false;
      else if (this.state.filterBy === "completed")
        return todo.isCompleted === true;
    });
  };

  render() {
    return (
      <div className="app-container">
        <Header />
        <TaskAdder addToDo={this.addToDo} />
        <Filter
          changeFilter={this.changeFilter}
          filterBy={this.state.filterBy}
        />
        <List
          todos={this.filterList(this.state.todos)}
          deleteToDo={this.deleteToDo}
          toggleIsCompleted={this.toggleIsCompleted}
        />
      </div>
    );
  }
}

export default App;
