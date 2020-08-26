import React, { useState } from 'react';
import { CotizadorForm } from './components/CotizadorForm';
import { MostrarCotización } from './components/MostrarCotización';

import './App.scss';

function App() {

  const [cotizacion, setCotizacion] = useState({mostrar:false})


  return (
    <>

      <h1>Cotizador de Seguros</h1>

      <main>
        <CotizadorForm setCotizacion={ setCotizacion } />
        
        <MostrarCotización cotizacion= {cotizacion} />
      </main>
   
    </>
  );
}

export default App;
