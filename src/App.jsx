import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Inicio from './components/Inicio/Inicio'
import Form_varianza_conocida from './components/P_H_Media/Varianza_conocida/Form_varianza_conocida'
import Form_varianza_desconocida_npequeño from './components/P_H_Media/Form_varianza_desconocida_npequeño/Form_varianza_desconocida_npequeño'
import Form_varianza_desconocida_ngrande from './components/P_H_Media/Form_varianza_desconocida_ngrande/Form_varianza_desconocida_ngrande'
import P_H_Media from './components/P_H_Media/P_H_Media'


function App() {

  const [currentPage, setCurrentPage] = useState('principal')

  const renderPage = () => {
    switch (currentPage) {
      case 'Pruebas-1':
        return <P_H_Media/>

        case 'Pruebas-2':
        return <h1>Prueba hipotesis 2</h1>

        case 'Pruebas-3':
        return <h1>Prueba hipotesis 3</h1>

        case 'Pruebas-4':
        return <h1>Prueba hipotesis 4</h1>

        case 'Inicio':
          default:
            return <Inicio />
        }
      }

  return (
    
    <>
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
    </>
    
    
  )
}

export default App
