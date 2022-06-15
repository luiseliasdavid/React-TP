
import { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import {Task} from './interfaces/Task';
import TaskList from './components/TaskList';

interface Props {
  title: string
}


export function App({title}:Props) {

  const [task, setTask] = useState<Task[]>([{
    id: 1,
    title: 'Learn React',
    description: 'Learn React',
    completed: false,
  }]);

  return (
    <div className="bg-dark text-white" style={{height: '100vh'}}>
      {/* navbar */}
      <nav className="navbar navbar-dark bg-primary">
        <a href="/" className='navbar-brand'>
          <img src={logo} alt="logo" style={{width:"4rem"}}/>
          {title}
          </a>
        </nav>
        {/* end navbar */}
     <main className="container p-4">
    <TaskList tasks={task} />

     </main>



    </div>
  );
}

export default App;
