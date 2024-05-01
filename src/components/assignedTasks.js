import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'


import Sidebar from './sidebar.js'
import './login.css';

function Assigned() {
  const [assignedTask, setAssignedTask] = useState([])

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_IP_ADDRESS}/task/assignedTasks`
        );
        console.log(res, "assigned tasks ")
        setAssignedTask(res.data.reverse())
      } catch (error) {
        console.log("Error fetching tasks:", error);
        
      }
    };

    fetchTasks(); 
  }, []);

const handleOptionChange = async (event, itemId) => {
  const { value } = event.target;
  setAssignedTask(prevItems => {
    return prevItems.map(item => {
      if (item._id === itemId) {
        return { ...item, selectedOption: value };
      }
      return item;
    });
  });

  const data = event.target.value
  try{
const res = await axios.post( `${process.env.REACT_APP_IP_ADDRESS}/task/assignedTaskStatus/${itemId}/${data}`)
alert("Status Changed Successfully")
console.log(res)
  }catch(e){
console.log(e, "errormessage")
  }
};


 
  return (
    <div className="bg-container">
      <Sidebar />
      <div style={{marginLeft:"20px", marginTop:"20px"}}>
      <h1>Assigned tasks </h1>

{assignedTask.map((each, index)=>(
<div className="card" style={{backgroundColor:'#F1F6F7'}}>
<div style={{display:'flex', justifyContent:'space-between'}}>

<div >
<p><span style={{fontWeight:'bold'}}>Name: </span> {each.name}</p>
<p><span style={{fontWeight:'bold'}}>Email:</span> {each.email}</p>
<p> <span style={{fontWeight:'bold'}}>Mobile: </span> {each.mobileNumber}</p>

</div>

<div>
<p> <span style={{fontWeight:'bold'}}> Qualification: </span> {each.qualification}</p>
<p> <span style={{fontWeight:'bold'}}>Collage: </span> {each.collage}</p>
<p> <span style={{fontWeight:'bold'}}>University: </span> {each.university}</p>
</div>

<div key={index}>
      <p> <span style={{fontWeight:'bold'}}>Location: </span> {each.location}</p>
      <p> <span style={{fontWeight:'bold'}}>Pass Out Year: </span> {each.passOutYear}</p>
      <select value={each.taskStatus ? each.taskStatus : (each.selectedOption || '')} style={{ backgroundColor: each.taskStatus === 'completed' ? 'green' : 'white', color: each.taskStatus === 'completed' ? 'white' : 'red'}} onChange={(event) => handleOptionChange(event, each._id)}>
        <option value="">Start</option>
        <option value="inprogress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
    </div>
</div>

</div>

))}
      </div>
     

      
    </div>
  );
}

export default Assigned;
