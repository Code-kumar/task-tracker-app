import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        task: 'task 1',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        task: 'task 2',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 3,
        task: 'task 3',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },
    {
        id: 4,
        task: 'task 4',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },
]);   

// Delete Task
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id ))
  }

  // Toggle Reminder 
  const toggleReminder = (id) =>{
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="App">
      <div className="main-container">
        <Header />
        {
          tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
          : 'No Task to Show!!'
        }
      </div>
    </div>
  );
}

export default App;
