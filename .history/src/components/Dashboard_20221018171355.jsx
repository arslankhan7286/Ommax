import React from 'react';
import { BrowserRouter as  Link } from "react-router-dom";

function Dashboard(props) {
    return (
        <div>
            React App
            <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        </div>
    );
}

export default Dashboard;