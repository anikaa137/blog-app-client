import React, { useContext } from 'react'
import {Link} from "react-router-dom";
import { UserContext } from '../../../App';
import './Navbar.css'

function  Nabbar() {

    return (
        <div calss="mb-5">
            <h1 class="title text-center mt-3" >Readit Blog</h1>
            <nav class="navbar navbar-expand-lg navbar-light nav">
  <div class="container-fluid">
    {/* <Link class="navbar-brand" href="#">Navbar</Link> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav mx-auto p-4">
       <Link   to="/" class="nav-link me-4 " > HOME </Link>
        <Link  to="/" class="nav-link me-4"  > FEATURES</Link>
        <Link  to="/" class="nav-link me-4"  > TAG ARCHIVE</Link>
        <Link  to="/" class="nav-link  me-4" > AUTHOR ARCHIVE</Link>


      </div>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Nabbar;
