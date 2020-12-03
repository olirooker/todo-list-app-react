import React from "react";

class TaskAdder extends React.Component {
  state = { item: "" };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.item) {
      this.props.addToDo(this.state);
      this.setState({ item: "" });
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="task-adder">
        <label className="input-label">
          <input
            type="text"
            className="input-field"
            placeholder="add todo"
            name="task"
            id="item"
            value={this.state.item}
            onChange={this.handleChange}
          />
        </label>

        <label className="button-label">
          <button type="submit" className="add-button add-button1">add</button>
        </label>
      </form>
    );
  }
}

export default TaskAdder;
