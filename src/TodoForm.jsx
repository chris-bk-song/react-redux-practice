import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './redux/actions/todoActions';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateState(event, key) {
    this.setState({
      [key]: event.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.value !== '') {
      this.props.onNewTask(this.state.value);
      this.setState({ value: '' });
    }
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form-field">
          <label htmlFor="todo" className="form-label">
            Enter A Task Name
          </label>
          <input
            type="text"
            id="todo"
            name="todo"
            className="form-input"
            value={this.state.value}
            onChange={e => {
              this.updateState(e, 'value');
            }}
          />
          <button type="submit" className="form-button">
            Add
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onNewTask: addTodo
}

export default connect(
  null,
  mapDispatchToProps
)(TodoForm);
