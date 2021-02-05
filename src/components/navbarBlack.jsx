import React from 'react';
import './../css/navbarBlack.css';

const NavbarBlack = () => {
  return ( 
    <nav className="navbar-black navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><i className="fab fa-instagram"></i></a>
        <a className="navbar-brand" href="#"><i className="fab fa-twitter "></i></a>
        <a className="navbar-brand" href="#"><i className="fab fa-facebook"></i></a>
      </div>
    </nav>
  );
}
 
export default NavbarBlack;