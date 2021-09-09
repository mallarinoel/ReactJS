import React from "react";
import './style.css';
//import logo from './icon.png';
import {
  a,
  withRouter
} from "react-router-dom";

function Navigation(props) {
  return (
<header class="header">
  <a href="/home" class="logo">ReactJS</a>
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <ul class="menu">
    <li><a href="/home">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</header>
  );
}

export default withRouter(Navigation);