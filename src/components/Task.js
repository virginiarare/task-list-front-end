import React , { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {
  const [completed, setCompleted] = useState(props.isComplete);

  const toggleCompleted = () => {
    setCompleted(!completed);
  };

  const buttonClass = completed ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item">
      <button className={`tasks__item__toggle ${buttonClass}`} onClick={toggleCompleted}>
        {props.title}
      </button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
};

export default Task;


// const Task = ({ id, title, isComplete }) => {
//   const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';
//   return (
//     <li className="tasks__item">
//       <button className={`tasks__item__toggle ${buttonClass}`}>{title}</button>
//       <button className="tasks__item__remove button">x</button>
//     </li>
//   );
// };

// Task.propTypes = {
//   id: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   isComplete: PropTypes.bool.isRequired,
// };

// export default Task;



