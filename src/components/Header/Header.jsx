import React from 'react';
import './header.css';

function Header({ setCurrentPage }) {
  return (
    <header>
      <div className="header-container">
        <h1>Estadistica</h1>
        <nav>
          <ul>
            <li><a onClick={() => setCurrentPage('Inicio')} href="#Inicio">Inicio</a></li>
            <li><a onClick={() => setCurrentPage('Pruebas-1')} href="#Media">Media</a></li>
            <li><a onClick={() => setCurrentPage('Pruebas-2')} href="#Proporciones">Proporciones</a></li>
            <li><a onClick={() => setCurrentPage('Pruebas-3')} href="#Varianza">Varianza</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
