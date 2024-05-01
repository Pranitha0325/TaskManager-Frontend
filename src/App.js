//  import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import TaskCreation from './components/taskCreation'
 import Login from './components/login'
 import ListOfTasks from './components/listOfTasks'
 import AssignedTasks from './components/assignedTasks'
 import Summery from './components/summery'



import './App.css';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<TaskCreation />} />
        <Route path="/list" element={<ListOfTasks />} />
        <Route path="/assigned" element={<AssignedTasks />} />
        <Route path="/summery" element={<Summery />} />

      </Routes>
    </Router>
    
   
   
   
  );
}

export default App;
