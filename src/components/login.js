import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from "react-modal";


import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiTwotoneEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";



import axios from "axios";

import './login.css';

function Login() {
    const navigate = useNavigate()
  const [details, setDetails] = useState({
    name:"",
    email:"",
    password:""
  })
  const [emailerror, setemailerror] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [confrimshowPass, setConfrimShowPass] = useState(false);
  const [show, setshow] = useState(false);


  function closeModal() {
    setshow(false)
  }

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

  function passwordChange(id) {
    var x = document.getElementById(id);
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    if (id === "pass") setShowPass(!showPass);
    else setConfrimShowPass(!confrimshowPass);
  }
const register = async() => {
    console.log(details, "details of the new user")
    const data = details
    try {
       const res =await axios
        .post(`${process.env.REACT_APP_IP_ADDRESS}/users/signup `, {
          details
        })
        console.log(res, "detailsofuser")
        alert("user has be registered successfully ")
        // navigate("/create")
    }catch(error){
console.log(error, "errormessage")
    }
}
  const submitlogin = async (event)=> {
    event.preventDefault();
    console.log(details.email, "form submited")
const data = details 
    try {
        const res =await axios
        .get(`${process.env.REACT_APP_IP_ADDRESS}/users/login/${details.email} `, {
          
        })
        console.log(res, "responseof the details")
        navigate("/create")
    }catch(error){
console.log(error)
    }
  }

  return (
    <div className="login-container">
     <form
                          onSubmit={(e) => {
                            submitlogin(e);
                          }}
                          className="container formtag loginFormTag"
                          style={{
                            width: "550px",
                            height:'550px',
                            backgroundColor: "#eefeff",
                           borderRadius:'20px',
                            padding:"50px",
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'center',
                            alignItems:'center'
                          }}
                        >
                          <div>
                            <h3 className="logosign" style={{marginBottom:"20px"}}>
                              <span className="logosign" style={{ color: "#094162" }}>SIGN</span>{" "}
                              <span className="logoin" style={{ color: "#ff5b22" }}>IN</span>
                            </h3>
                          </div>
                          <div className="input-group mb-2">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text"
                                style={{ width: "60px", maxWidth: "40px" }}
                                id="basic-addon1"
                              >
                                <MdEmail style={{ color: "rgb(3, 104, 104)", height:"30px" }} />
                              </span>
                            </div>

                            <input
                              type="text"
                              className="form-control changePlaceHolderSize"
                              wrapperClassName="mb-4"
                              required
                              value={details.email}
                              onChange={(e) =>
                                setDetails({ ...details, email: e.target.value })
                              }
                              placeholder="Email id"
                              aria-label="Email"
                              aria-describedby="basic-addon1"
                             
                              autoComplete="off"
                            />
                            <br />
                          </div>

                          {emailerror === false && details.email?.length > 0 ? (
                            <p style={{ color: "red" }}>email not registered</p>
                          ) : (
                            ""
                          )}

                          <div className="input-group mb-2" id="pass-div">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text"
                                style={{ width: "60px", maxWidth: "40px" }}
                                id="basic-addon1"
                              >
                                <RiLockPasswordFill
                                  style={{ color: "rgb(3, 104, 104)", height:"30px" }}
                                />
                              </span>
                            </div>

                            <input
                              type="password"
                              id="pass"
                              className="form-control changePlaceHolderSize"
                              value={details.password}
                              onChange={(e) =>
                                setDetails({ ...details, password: e.target.value })
                              }
                              placeholder="Enter Password"
                              aria-label="Email"
                              aria-describedby="basic-addon1"
                              autoComplete="off"
                            />

                            <span
                              onClick={() => passwordChange("pass")}
                              className="input-group-text"
                              style={{ width: "60px", maxWidth: "40px" }}
                              id="basic-addon1"
                            >
                              {showPass ? (
                                <AiTwotoneEyeInvisible
                                  style={{ color: "rgb(3, 104, 104)" }}
                                />
                              ) : (
                                <AiFillEye style={{ color: "rgb(3, 104, 104)" }} />
                              )}
                            </span>
                          </div>

                          {/* <span className="errorsInreg">{errors.password && errors.password.message}</span> */}

                         
                          <div style={{ display: "flex" }}>
                            <p style={{ fontSize: "23px" }}>
                              Not a user yet &nbsp;
                              <Link onClick={() => setshow(true)} >Signup</Link>
                            </p>
                            
                            
                          </div>
                          <div style={{ textAlign: "center" }} className="w-100">
                            <button
                              
                              style={{
                                backgroundColor: "#094162",
                                color: "white",
                              }}
                              className="w-100 btn "
                              type="submit"
                            
                            >
                              Signin
                            </button>
                          </div>
                        </form>

                        <Modal
         isOpen={show}
         onRequestClose={closeModal}
         style={customforreport}
         contentLabel="Example Modal"
       >
        <div style={{display:'flex', justifyContent:'space-between'}}>
        <h3 style={{ fontWeight: "600" }}>Sign up</h3>
         <div style={{ cursor: 'pointer'}} className="close-icon" onClick={closeModal}>&#10006;</div>

        
        </div>

        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text"
                                style={{ width: "60px", maxWidth: "40px" }}
                                id="basic-addon1"
                              >
                                <MdEmail style={{ color: "rgb(3, 104, 104)", height:"30px" }} />
                              </span>
                            </div>

                            <input
                              type="text"
                              className="form-control changePlaceHolderSize"
                              wrapperClassName="mb-4"
                              required
                              value={details.name}
                              onChange={(e) =>
                                setDetails({ ...details, name: e.target.value })
                              }
                              placeholder="Name"
                              aria-label="Email"
                              aria-describedby="basic-addon1"
                             
                              autoComplete="off"
                            />
                            <br />
                          </div>

                          <div className="input-group mb-2">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text"
                                style={{ width: "60px", maxWidth: "40px" }}
                                id="basic-addon1"
                              >
                                <MdEmail style={{ color: "rgb(3, 104, 104)", height:"30px" }} />
                              </span>
                            </div>

                            <input
                              type="text"
                              className="form-control changePlaceHolderSize"
                              wrapperClassName="mb-4"
                              required
                              value={details.email}
                              onChange={(e) =>
                                setDetails({ ...details, email: e.target.value })
                              }
                              placeholder="Email id"
                              aria-label="Email"
                              aria-describedby="basic-addon1"
                             
                              autoComplete="off"
                            />
                            <br />
                          </div>

                          <div className="input-group mb-2" id="pass-div">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text"
                                style={{ width: "60px", maxWidth: "40px" }}
                                id="basic-addon1"
                              >
                                <RiLockPasswordFill
                                  style={{ color: "rgb(3, 104, 104)", height:"30px" }}
                                />
                              </span>
                            </div>

                            <input
                              type="password"
                              id="pass"
                              className="form-control changePlaceHolderSize"
                              value={details.password}
                              onChange={(e) =>
                                setDetails({ ...details, password: e.target.value })
                              }
                              placeholder="Enter Password"
                              aria-label="Email"
                              aria-describedby="basic-addon1"
                              autoComplete="off"
                            />

                            <span
                              onClick={() => passwordChange("pass")}
                              className="input-group-text"
                              style={{ width: "60px", maxWidth: "40px" }}
                              id="basic-addon1"
                            >
                              {showPass ? (
                                <AiTwotoneEyeInvisible
                                  style={{ color: "rgb(3, 104, 104)" }}
                                />
                              ) : (
                                <AiFillEye style={{ color: "rgb(3, 104, 104)" }} />
                              )}
                            </span>
                          </div>

                          <button
                              
                              style={{
                                backgroundColor: "#094162",
                                color: "white",
                              }}
                              onClick={register}
                              className="w-100 btn "
                              type="button"
                            
                            >
                              Signin
                            </button>
         
        
       </Modal>

    
    
    
      
    </div>
  );
}

export default Login;
