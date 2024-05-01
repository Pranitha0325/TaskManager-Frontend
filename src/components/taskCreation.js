import React from 'react';
import { useState } from 'react';
import axios from "axios";
import Sidebar from './sidebar.js'
import './login.css';

function TaskCreation() {
  const [details, setDetails] = useState({
    name:"",
    collage:"",
    university:"",
    passOutYear:"",
    qualification:"",
    email:"",
    mobileNumber:"",
    location:""
  })

  const submitTask = async() =>{
    console.log(details, "details of new task")
    const data = details
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_IP_ADDRESS}/task/create`,
        data
      );
      console.log(res, "responseofdetails")
      alert("task has been created successfully")
    
      setDetails({
        name:"",
        collage:"",
        university:"",
        passOutYear:"",
        qualification:"",
        email:"",
        mobileNumber:"",
        location:""
      })

    } catch (error) {
      console.error("An error occurred:", error);
    }

  }
  console.log(details, "userDetails")
  return (
    <div className="bg-container">
      <Sidebar />
      <div className="task-container">
        <h1>Create new Task </h1>
        <div className="form-container ">
          <div className="items" >
          <label style={{width:"200px"}} >Candidate Name: </label>
          <input className='inputs' type="text" placeholder='Full Name' value={details.name} required onChange={(e) =>
                                      setDetails({
                                        ...details,
                                        name: e.target.value,
                                      })
                                    }/>
          </div>
          <div className="items">
          <label>Qualification: </label>
          <input className='inputs'type="text" style={{marginLeft:"50px"}} placeholder='Qualification' required value={details.qualification} onChange={(e) =>
                                      setDetails({
                                        ...details,
                                        qualification: e.target.value,
                                      })
                                    }/>
          </div>
          <div className="items">
          <label>Collage Name: </label>
          <input className='inputs' required type="text"style={{marginLeft:"40px"}} placeholder='Collage' value={details.collage} onChange={(e) =>
                                      setDetails({
                                        ...details,
                                        collage: e.target.value,
                                      })
                                    }/>
          </div>
          <div className="items">
          <label>University: </label>
          <input className='inputs' required type="text" style={{marginLeft:"80px"}} placeholder='University' value={details.university} onChange={(e) =>
                                      setDetails({
                                        ...details,
                                        university: e.target.value,
                                      })
                                    } />
          </div>
          <div className="items">
          <label>Location: </label>
          <input className='inputs' required type="text" style={{marginLeft:"90px"}} placeholder='Location' value={details.location} onChange={(e) =>
                                      setDetails({
                                        ...details,
                                        location: e.target.value,
                                      })
                                    }/>
          </div>
          <div className="items" >
          <label>Pass out Year: </label>
          <input className='inputs' required type="text" style={{marginLeft:"50px"}} placeholder='Year' value={details.passOutYear} onChange={(e) =>
                                      setDetails({
                                        ...details,
                                        passOutYear: e.target.value,
                                      })
                                    } />
          </div>
          <div className="items">

          <label>Candidate Email : </label>
          <input className='inputs' required type="text" placeholder='Email' value={details.email} onChange={(e) =>
                                      setDetails({
                                        ...details,
                                        email: e.target.value,
                                      })
                                    } />
          </div>

          <div className="items">

          <label>Candidate Mobile : </label>
          <input className='inputs' required type="text" placeholder='Mobile Number' value={details.mobileNumber} onChange={(e) =>
                                      setDetails({
                                        ...details,
                                        mobileNumber: e.target.value,
                                      })
                                    } />
          </div>

          <button type="button" className="button" onClick={()=>submitTask()}>Submit</button>
         
          
        </div>
      </div>
      
    </div>
  );
}

export default TaskCreation;
