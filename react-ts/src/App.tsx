import { useState } from 'react';
import './App.css';

interface Props {
  title: string
}
interface Task {
  id: number,
  title: string,
  description:'Learn React',
  completed: false
}

function App({title}:Props) {

  const [task, setTask] = useState<Task[]>([{
    id: 1,
    title: 'Learn React',
    description: 'Learn React',
    completed: false
  }]);

  return (
    <div className="App">
     <h1>{title}</h1>
     {
      task.map(task => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          </div>
      ))
     }


    </div>
  );
}

export default App;
