import React from 'react';
import './../css/navbar.css'
import Logo from './../assets/Logo.png';

const Navbar = () => {
  return ( 
    <nav className="navbar-primary navbar navbar-expand-sm">
      <div className="container-fluid navbarTwo">
        <a className="navbar-brand" href="#">
          <img className="logo" src={Logo} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="#">About NEP</a>
            <a className="nav-link" href="#">The Program</a>
            <a className="nav-link" href="#">Media</a>
            <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Contact us</a>
            <a className="nav-link btn-orange" href="#" tabIndex="-1" aria-disabled="true">Apply</a>
          </div>
        </div>
      </div>
    </nav>        
  );
}
 
export default Navbar;
