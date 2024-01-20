import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = ({ }) => {

 
  return (
    <div>
      <ul>
        <li><Link to={`/category/Carnes`}>Carnes</Link></li>
        <li><Link to={`/category/Lacteos`}>Lacteos</Link></li>
        <li><Link to={`/category/Abarrotes`}>Abarrotes</Link></li>
      </ul>
    </div>
  );
}

export default NavBar;