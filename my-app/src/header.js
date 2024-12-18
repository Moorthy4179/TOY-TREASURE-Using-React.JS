import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Home"
import {Outlet,Link} from "react-router-dom"; 
const Header = ()=>{
  return(
    <>
    <nav class="navbar navbar-expand-lg bg-warning">
  {/* <div class="container-fluid">
    <Link to="/" class="navbar-brand">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/home" class="nav-link active" aria-current="page">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/action" class="nav-link">Link</Link>
        </li>
        {/* <li class="nav-item dropdown">
          <Link to="/action1" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul class="dropdown-menu">
            <li><Link to="/" class="dropdown-item" >Action</Link></li>
            <li><Link to="/" class="dropdown-item">Another action</Link></li>
            <li><hr class="dropdown-divider" /></li>
            <li><Link to="/" class="dropdown-item" >Something else here</Link></li>
          </ul>
        </li> */}
        {/* <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div> */}
    <div class="d-flex">
    <Link to="/login" class="navbar-brand">Login</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> 
  </div> 
  </div>
</nav>
<Outlet />
    </>
  )
}
export default Header;