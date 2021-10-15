import React from 'react';
import Header from './components/Header';
import ListaCampos from './components/ListaCampos';
import Formulario from './components/Formulario';
import CamposProvider from './context/CamposContext';
import FormularioProvider from './context/FormularioContext';

function App() {
  return (
    <FormularioProvider>
      <CamposProvider>
        <Header/>
        <ListaCampos/>
        <Formulario/>
      </CamposProvider>s
    </FormularioProvider>
  );
}

export default App;
