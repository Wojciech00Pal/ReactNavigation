import React, { useState } from 'react';
import './Styles/navbar.css'; // Import the CSS file
import {Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate(); // Use useNavigate

  const handleFantasify= (event) =>{
    event.preventDefault();
    // Navigate to the Fantasify component with the search text as a prop
    console.log("ss", searchText);
    navigate('/Fantasify',  {state:{searchText: searchText}} );
  }

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
    console.log("handle", event.target.value)
  };


  const location = useLocation().pathname;
  return (
  <>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarSupportedContent">
    <ul class="navbar-nav">
      <li class={`nav-item ${location==='/'?'active':''}`}>        
          <Link class="nav-link" to="/"><i class="bi bi-book"/> Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class={`nav-item ${location==='/people'?'active':''}`}>
        <Link class="nav-link" to="/people">People</Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sections
        </a>
        <div class="dropdown-menu bg-dark"
       aria-labelledby="navbarDropdown">
          <a class="dropdown-item" 
          style={{color:
            "white"}} href="/NotFound">Action</a>
          <a class="dropdown-item" href="/NotFound"
          style={{color:
            "white"}} 
          >Extra</a>
          {/* <div class="dropdown-divider"></div> */}
          <a class="dropdown-item" 
          style={{color:
            "white"}} href="/NotFound">About us</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
    <form class="form-inline my-2 my-lg-0 navbar-form" onSubmit={handleFantasify}>
      <input class="form-control mr-sm-2 " type="search" placeholder="Type..."
      style={{maxwidth:"50%"}} aria-label="Search"
      value={searchText}
      onChange={handleSearchTextChange}
      />
      <button class="btn btn-outline-primary my-1 my-sm-0" type="submit">Fanasify...</button>
    </form>
</nav>
  </>
  )
}

export default Navbar;