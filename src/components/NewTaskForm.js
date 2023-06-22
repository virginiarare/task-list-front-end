import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewTaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() === '') {
      return;
    }
    const newTask = {
      title: title.trim(),
      description: '',
    };
    addTask(newTask);
    setTitle('');
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label htmlFor="task-title" className="form-label">
        Enter Task Title
      </label>
      <input
        id="task-title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-input"
      />
      <button type="submit" className="form-button">
        Add Task
      </button>
    </form>
  );
};

NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default NewTaskForm;