import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ categoryId }) => {
  return (
    <div>
      <ul>
        <li><Link to={`/category/${categoryId}`}>Carnes</Link></li>
        <li><Link to={`/category/${categoryId}`}>Lacteos</Link></li>
        <li><Link to={`/category/${categoryId}`}>Abarrotes</Link></li>
      </ul>
    </div>
  );
}

export default NavBar;