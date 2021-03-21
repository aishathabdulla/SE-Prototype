import React from 'react';
//https://www.youtube.com/watch?v=fL8cFqhTHwA

function Navbar() {
  return (
    <nav id= "navbar"class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="home.html"><strong><h2>FDM</h2></strong></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="home.html">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="home.html#Forum">Forum</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="home.html#News">News</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="home.html#Calendar">Calendar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="home.html#Policy">Update Policy</a>
          </li>
        </ul>
        <div class="btn-group">
          <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Jane Doe
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="update.html">Update Details</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Logout</a>
          </div>
        </div>
      </div>
    </nav>
    )
}

export default Navbar;