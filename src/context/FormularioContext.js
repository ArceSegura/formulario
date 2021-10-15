import React, { createContext, useState, useEffect } from 'react';

export const FormularioContext = createContext();

const FormularioProvider = (props) => {

    const [formulario, guardarFormulario] = useState([]);

    const guardarCampoContext = (campo)=>{
        guardarFormulario([
            ...formulario,
            campo
        ])
    }

    return ( 
        <FormularioContext.Provider
            value={{
                formulario,
                guardarCampoContext,
            }}
        >
            {props.children}
        </FormularioContext.Provider>
     );
}
 
export default FormularioProvider;