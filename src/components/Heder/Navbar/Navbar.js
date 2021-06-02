import React from 'react'
import './Navbar.css'
function componentName() {
    return (
        <div calss="mb-5">
            <h1 class="title text-center mt-3" >Readit Blog</h1>
            <nav class="navbar navbar-expand-lg navbar-light nav">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav mx-auto p-4">
        <a class="nav-link me-4 "   href="#">Home</a>
        <a class="nav-link me-4" href="#">Features</a>
        <a class="nav-link me-4" href="#">Pricing</a>
        <a class="nav-link  me-4" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>
        </div>
    )
}

export default componentName
