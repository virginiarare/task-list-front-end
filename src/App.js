import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import './App.css';

const kBaseUrl = 'http://127.0.0.1:5000';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${kBaseUrl}/tasks`);
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const toggleCompleted = async (taskId) => {
    try {
      const updatedTasks = tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isComplete: !task.isComplete };
        }
        return task;
      });

      setTasks(updatedTasks);

      await axios.patch(`${kBaseUrl}/tasks/${taskId}/${tasks.find((task) => task.id === taskId).isComplete ? 'mark_incomplete' : 'mark_complete'}`);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));

      await axios.delete(`${kBaseUrl}/tasks/${taskId}`);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList tasks={tasks} toggleCompleted={toggleCompleted} deleteTask={deleteTask} />
        </div>
      </main>
    </div>
  );
};

export default App;

// const App = () => {
//   const [tasks, setTasks] = useState([
//     {
//       id: 1,
//       title: 'Mow the lawn',
//       isComplete: false,
//     },
//     {
//       id: 2,
//       title: 'Cook Pasta',
//       isComplete: true,
//     },
//   ]);

//   const toggleCompleted = (taskId) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((task) => {
//         if (task.id === taskId) {
//           return { ...task, isComplete: !task.isComplete };
//         }
//         return task;
//       })
//     );
//   };

//   const deleteTask = (taskId) => {
//     setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Ada&apos;s Task List</h1>
//       </header>
//       <main>
//         <div>
//           <TaskList tasks={tasks} toggleCompleted={toggleCompleted} deleteTask={deleteTask} />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default App;

