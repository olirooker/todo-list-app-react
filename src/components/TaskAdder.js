import React from "react";

class TaskAdder extends React.Component {
  state = { task: "" };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.task) {
      this.props.addTask(this.state);
      this.setState({ task: "" });
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
            placeholder="add task"
            name="task"
            id="task"
            value={this.state.task}
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
