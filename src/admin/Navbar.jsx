import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import "./Admin.css";

const Navbar = () => {
  const dash_list = [
    ["Dashboard" , "/Dashboard" , MdDashboard ],          //label,link,img
    ["Assign Task" , "/Dashboard" ,MdDashboard],
    ["Add user" , "/Dashboard" ,MdDashboard],
    ["View users" , "/Dashboard" ,MdDashboard],
    ["Completion" , "/Dashboard" ,MdDashboard],
  ];
  const [window , setWindow] = useState(false);

  let openWindow = () => {
    if(window === false) {
      setWindow(true);
    }
    else{
      setWindow(false);
    }
  };

  return (
    <nav className='navbar-menu' style={{backgroundColor : "#1976D2" , height : '100vh' , width: window === false ? 147 : 47, transition:'0.5s'}}>
      <div className='navbar-logo' onClick={() => openWindow()}>
        <img src='/navbar-logo' alt="navbar-logo"/>
        </div> 

        <ul className='navbar-list' >
          {
            dash_list?.map((item , i) => (
              <div className='navbar-box' key={i}>
                <Link to={item[1]} className='navbar-link'>
                {React.createElement(item[2], { size: 20 })}
              <li className='navbar-label' style={{ display: window === false ? "inline-block" : "none"}}>
               {item[0]}
              </li>
              </Link>
              </div>
            ))
          }

        </ul>
        </nav>

  );
};

export default Navbar;
