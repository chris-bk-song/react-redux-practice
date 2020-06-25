import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from './Task';

import { toggleTodo, deleteTodo } from './redux/actions/todoActions';
import { setVisibility } from './redux/actions/visibilityActions';

class TaskList extends Component {
  render() {
    return (
      <div>
        <button onClick={() => { this.props.setVisibility('incomplete')}}>Incomplete</button>
        <button onClick={() => { this.props.setVisibility('complete')}}>Complete</button>
        { this.props.visibility === 'incomplete' && (
          <>
            <h2 className="TaskList__title">Incomplete Tasks</h2>
            {this.props.tasks.map((task, i) => {
              if (!task.complete) {
                return (
                  <Task
                    task={task}
                    key={i}
                    toggleCompleteStatus={() => {
                      this.props.toggleCompleteStatus(i);
                    }}
                    deleteTask={() => {
                      this.props.deleteTask(i);
                    }}
                  />
                );
              }
              return '';
            })}
          </>
        ) }
        { this.props.visibility === 'complete' && (
          <>
            <h2 className="TaskList__title">Complete Tasks</h2>
            {this.props.tasks.map((task, i) => {
              if (task.complete) {
                return (
                  <Task
                    task={task}
                    key={i}
                    toggleCompleteStatus={() => {
                      this.props.toggleCompleteStatus(i);
                    }}
                    deleteTask={() => {
                      this.props.deleteTask(i);
                    }}
                  />
                );
              }
              return '';
            })}
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.todoState.tasks,
    visibility: state.visibility
  }
}

const mapDispatchToProps = {
  toggleCompleteStatus: toggleTodo,
  deleteTask: deleteTodo,
  setVisibility: setVisibility,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)
