import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import logo from '../asset/img/logo.png';

export default function Main() {
  return (
    <div id="wrap">
      <header>
        <h1 className="logo">
          <img src={logo} alt="logo" />
        </h1>
        <nav className="nav">
          <ul>
            <li><a href="#">menu1</a></li>
            <li><a href="#">menu2</a></li>
            <li><a href="#">menu3</a></li>
            <li><a href="#">menu4</a></li>
            <li><Link to="/login">login</Link></li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <aside>aside</aside>
        <section>section contents</section>
      </main>
      <footer className="footer">
        footer
      </footer>
    </div>
  )
}
