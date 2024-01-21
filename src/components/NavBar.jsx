import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css'
const NavBar = ({ }) => {

 
  return (
    <div>
      <ul className='ordenarMenu'>
        <li><Link to={`/category/Carnes`}>Carnes</Link></li>
        <li><Link to={`/category/Lacteos`}>Lacteos</Link></li>
        <li><Link to={`/category/Abarrotes`}>Abarrotes</Link></li>
      </ul>
    </div>
  );
}

export default NavBar;