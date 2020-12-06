import React from "react";
import Filter from "./components/Filter";
import Header from "./components/Header";
import List from "./components/List";
import TaskAdder from "./components/TaskAdder";


class App extends React.Component {
  state = {
    todos: [{ item: "The first item", isCompleted: false, }],
    filterBy: 'all',
  };

  // componentDidMount() {
  //   const savedState = JSON.parse(localStorage.getItem("state"));
  //   this.setState(savedState);
  // };

  componentDidUpdate() {
    return this.filterList()
  };

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
      const newToDos = previousState.todos.filter(todo => {
        return todo.item !== name;
      })
      const newState = {
        todos: newToDos
      }
      return newState;
    }
      // , () => { console.log(this.state) }
      // , () => {
      //   localStorage.setItem("state", JSON.stringify(this.state));
      // }
    )
  };

  toggleIsCompleted = (id) => {
    this.setState(previousState => {
      const newToDos = previousState.todos.map(todo => {
        if (todo.item === id) {
          const newTodo = {
            item: todo.item,
            isCompleted: !todo.isCompleted
          }
          return newTodo;
        }
        else return todo;
      })
      const newState = {
        todos: newToDos
      }
      return newState;
    }, () => { console.log(this.state) }
      // , () => {
      //   localStorage.setItem("state", JSON.stringify(this.state));
      // }
    )
  };

  changeFilter = (condition) => {
    this.setState(currentState => {
      return { filterBy: condition }
    })
  };

  filterList = () => {
    if (this.state.filterBy === 'all') {
      console.log(this.state.todos.filter(todo => {
        if (todo.isCompleted === false || todo.isCompleted === false) {
          return todo
        }
      }))
    } else if (this.state.filterBy === 'active') {
      console.log(this.state.todos.filter(todo => {
        return todo.isCompleted === false;
      }))
    } else if (this.state.filterBy === 'completed') {
      console.log(this.state.todos.filter(todo => {
        return todo.isCompleted === true;
      }))
    }
  };

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
