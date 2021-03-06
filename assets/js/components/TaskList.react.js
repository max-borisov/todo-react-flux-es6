import React from 'react';
import Task from './Task.react';

var TaskList = React.createClass({

  render() {

    var project = this.props.project;
    var tasks = this.props.tasks.map((task) => {
      return <Task project={project} task={task} key={task.id} />
    });

    return (
      <div className='todo-list'>
        <table>
          <tbody>
            {tasks}
          </tbody>
        </table>
      </div>
    );
  }
});

export default TaskList;
