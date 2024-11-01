import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Inicio from './components/Inicio/Inicio';
import P_H_Media from './components/P_H_Media/P_H_Media';
import P_H_Proporciones from './components/P_H_Proporciones/P_H_Proporciones';
import P_H_Varianza from './components/P_H_Varianza/P_H_Varianza';

function App() {
  const [currentPage, setCurrentPage] = useState('Inicio');

  const renderPage = () => {
    switch (currentPage) {
      case 'Pruebas-1':
        return <P_H_Media />;
      case 'Pruebas-2':
        return <P_H_Proporciones />;
      case 'Pruebas-3':
        return <P_H_Varianza />;
      case 'Inicio':
      default:
        return <Inicio />;
    }
  };

  return (
    <>
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
    </>
  );
}

export default App;
