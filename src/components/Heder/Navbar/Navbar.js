import React, { useContext } from 'react'
import {Link} from "react-router-dom";
import { UserContext } from '../../../App';
import './Navbar.css'

function  Nabbar() {
	const [loggedInUser, setLoggedInUser] = useContext (UserContext);

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
       <Link> <Link class="nav-link me-4 "   href="#">Home</Link></Link>
        <Link class="nav-link me-4" href="#">Features</Link>
        <Link class="nav-link me-4" href="#">Pricing</Link>
        <Link class="nav-link  me-4" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
        {/* <button onClick={()=>setLoggedInUser({})}>Sign out</button> */}
                <li>

                {loggedInUser.email ? (
                  ""
                ) : (
                  <Link
                  to="/login"
                  className="nav-link mr-5 "
              >
                  Login
              </Link>
                )}
                {loggedInUser.email ? (
                  <Link
                    className="nav-link mr-5 "
                    onClick={() => setLoggedInUser({})}
                  >
                    {" "}
                    Logout
                  </Link>
                ) : (
                  <p></p>
              )}
      </li>

      </div>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Nabbar;
