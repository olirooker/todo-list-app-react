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
        <label class="input-label">
          <input
            type="text"
            class="input-field"
            placeholder="add task"
            name="task"
            id="task"
            value={this.state.task}
            onChange={this.handleChange}
          />
        </label>

        <label class="button-label">
          <button type="submit" class="add-button add-button1">add</button>
        </label>
      </form>
    );
  }
}

export default TaskAdder;
