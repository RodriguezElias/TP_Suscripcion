import React, { Component } from 'react';


class NavBar extends Component {

  render() {

    return (
      <div className="navbar navbar-dark bg-dark">


  <li class="nav-item">
  <a class="navbar-brand" href="./">INICIO</a>
  </li>
  <ul class="nav justify-content-center">
  
  <li class="nav-item">
    <a class="nav-link" href="/complete">Users</a>
  </li>
  
</ul>
      </div>   
    );
  }
}

export default NavBar;


