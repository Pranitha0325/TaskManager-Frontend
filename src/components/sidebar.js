import React from 'react';
import './sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <a href="/" className="sidebar-link" style={{marginBottom:"10px"}}>
        <h2>Create Task</h2>
    </a>
    <hr/>
    <a href="/list" className="sidebar-link" style={{marginBottom:"10px"}}>
      <h2>List of New tasks</h2>
      </a>
      <hr/>
       <a href="/assigned" className="sidebar-link" style={{marginBottom:"10px"}}>
      <h2>Assigned Tasks</h2>
      </a>
      <hr/>
       <a href="/summery" className="sidebar-link" style={{marginBottom:"10px"}}>
      <h2>Summery</h2>
      </a>
    </div>
  );
}

export default Sidebar;
