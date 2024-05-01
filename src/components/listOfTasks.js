import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import Modal from "react-modal";


import Sidebar from './sidebar.js'
import './login.css';

function List() {
  const [tasks, setTasks] = useState([])
  const [popup, setpopup]= useState(false);
  const [selesctedTaskId, setSelectedTaskId] = useState("")

  const customforreport = {
    content: {
      width: "500px", // Adjust the width as needed
      height: "400px", // Adjust the height as needed
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)", // Center the modal on the screen
      overflow: "hidden",
      zIndex: 2,
    },
  };

  function openPopup(id) {
    setpopup(true)
    setSelectedTaskId(id)

      }
      function closeModal() {
        setpopup(false)
      }

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_IP_ADDRESS}/task/allTasks`
        );
        setTasks(res.data.reverse()); 
      } catch (error) {
        console.log("Error fetching tasks:", error);
        
      }
    };

    fetchTasks(); 
  }, []);


let assignedUserEmails = []
  const users = [{name:'suresh', email:'suresh@gemail.com', role:'Admin'}, {name:'vanshika', email:'vanshika@gmail.com', role:'Team Meamber'}, {name:'ramesh', email:'ramesh@gmail.com', role:'Admin'}, {name:'priya', email:'priya@gmail.com', role:'Team Meamber'}]
  const handleCheckboxChange = (event, userEmail) => {
    if (event.target.checked) {
assignedUserEmails.push(userEmail)
      
    } else {
      assignedUserEmails = assignedUserEmails.filter(email => email !== userEmail);
      console.log(`User "${userEmail}" is unchecked.`);
    }
  };

  const submitassign = async (id) =>{
const data = assignedUserEmails
    try{
const res = await axios.post(`${process.env.REACT_APP_IP_ADDRESS}/task/allTasks/${id}`, data)
console.log(res, "responseafter updating ")
alert('Assigned Successfully')
setpopup(false)

    }catch(e){
console.log(e, "error message")
    }
  }
  
  
console.log(popup, "popupopen")

  return (
    <div className="bg-container">
      <Sidebar />
      <div style={{margin:"20px"}}>
      <h1 style={{marginBottom:"20px"}}>New Task List</h1>
      {tasks.map((each)=>(
 <div className="card" style={{backgroundColor:'#F1F6F7'}}>
 <div style={{display:'flex', justifyContent:'space-between', }} >

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

    <div>
    <p> <span style={{fontWeight:'bold'}}>location: </span> {each.location}</p>
  <p> <span style={{fontWeight:'bold'}}>Pass Out Year: </span> {each.passOutYear}</p>
  <button type="button" className='button' onClick={()=>openPopup(each._id)} >Assign</button>
    </div>
    </div>

    </div>
   
      ))}


         <Modal
         isOpen={popup}
         onRequestClose={closeModal}
         style={customforreport}
         contentLabel="Example Modal"
       >
        <div style={{display:'flex', justifyContent:'space-between', marginBottom:"10px"}}>
        <h3 style={{ fontWeight: "600" }}>List of Users</h3>
         <div style={{ cursor: 'pointer'}} className="close-icon" onClick={closeModal}>&#10006;</div>
        </div>
        <div style={{display:'flex', justifyContent:'space-between',paddingLeft:"15px"}}>
          <h5>Name</h5>
          <h5>Role</h5>
        </div>

        {users.map((each)=>(
          <div style={{display:'flex', justifyContent:'space-between', paddingRight:"20px", alignItems:'center'}}>
          <div style={{display:'flex', padding:'15px', alignItems:'center', textAlign:'center', fontSize:'20px'}}>
          <input style={{ transform: 'scale(1)' }}  onChange={(event) => handleCheckboxChange(event, each.email)} type="checkbox" />

            <p style={{marginBottom:'0px', paddingLeft:'15px'}}>{each.name}</p>
            </div>
            <p>{each.role}</p>
            </div>
          
        ))}
        <button className="button" type="button" onClick={()=>submitassign(selesctedTaskId)}>Submit</button>
         
        
       </Modal>
      
      </div>
    </div>
  );
}

export default List;
