import React from 'react';
import './header.css';

function Header({ setCurrentPage }) {
  return (
    <header>
        <div class="header-container">
            <h1>Estadistica</h1>
            <nav>
                <ul>
                    <li><a onClick={() => setCurrentPage('Inicio')}  href="#">Inicio</a></li>
                    <li><a onClick={() => setCurrentPage('Pruebas-1')}  href="#">Prueba 1</a></li>
                    <li><a onClick={() => setCurrentPage('Pruebas-2')}  href="#">Prueba 2</a></li>
                    <li><a onClick={() => setCurrentPage('Pruebas-3')}  href="#">Prueba 3</a></li>
                    <li><a onClick={() => setCurrentPage('Pruebas-4')}  href="#">Prueba 4</a></li>
                </ul>
            </nav>
        </div>
    </header>
  );
}

export default Header;