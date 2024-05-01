import {React, useEffect, useState} from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios'
import Sidebar from './sidebar.js'

const Summery = () => {
    const [newTasks, setNewTasks] = useState([])
    const [assignedTasks, setAssignedTasks] = useState([])
    const [completedTasks, setCompletedTasks] = useState([])
    const [allTasks, setAllTasks] = useState([])




    useEffect(() => {
        const newTasks = async () => {
          try {
            const res = await axios.get(
              `${process.env.REACT_APP_IP_ADDRESS}/task/allTasks`
            );
            setNewTasks(res.data.length); 
          } catch (error) {
            console.log("Error fetching tasks:", error);
            
          }
        };
    
        

        const assignedTasks = async () => {
            try {
              const res = await axios.get(
                `${process.env.REACT_APP_IP_ADDRESS}/task/assignedTasks`
              );
              setAssignedTasks(res.data.length); 
            } catch (error) {
              console.log("Error fetching tasks:", error);
              
            }
          };

          const completedTasks = async () => {
            try {
              const res = await axios.get(
                `${process.env.REACT_APP_IP_ADDRESS}/task/completedTasks`
              );
              console.log(res)
              setCompletedTasks(res.data.length); 
            } catch (error) {
              console.log("Error fetching tasks:", error);
              
            }
          };

          const allTasks = async () => {
            try {
              const res = await axios.get(
                `${process.env.REACT_APP_IP_ADDRESS}/task/totalTasks`
              );
              console.log(res)
              setAllTasks(res.data.length); 
            } catch (error) {
              console.log("Error fetching tasks:", error);
              
            }
          };


          newTasks();
          assignedTasks(); 
          completedTasks();
          allTasks()
      }, []);
      console.log(newTasks, "newTasks")
    
  // Data for the pie chart
  const data = {
    labels: ['New Tasks', 'Assigned Tasks', 'Completed Tasks', 'All Tasks'],
    datasets: [
      {
        data: [newTasks, assignedTasks, completedTasks, allTasks],
        backgroundColor: [
          'yellow',
          'Red',
          'green',
          'blue',
        ],
      },
    ],
  };

  return (
    <div className="bg-container">
      <Sidebar />
      <div style={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center', height:"80vh", width:"70vw"}}>
      <h1 style={{marginBottom:"150px", fontSize:"46px"}}>Task Summery </h1>
    <div style={{ width: '400px', height: '400px',  }}>
    
    <Pie data={data} />
  </div>
  </div>
  </div>
  );
};

export default Summery;
