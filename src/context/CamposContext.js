import React, { createContext, useState, useEffect } from 'react';

// Crear el Context
export const CamposContext = createContext();

// Provider es donde se encuentran las funciones y state
const CamposProvider = (props) => {

    // crear el state del Context
    const [campos, guardarCampos] = useState([]);

    // ejecutar el llamado a la api
    useEffect(() => {
        const obtenerCampos = async () => {
            //Simular respuesta api
            let campos = [
                {
                    id: 1,
                    nombre: 'text'
                },
                {
                    id: 2,
                    nombre: 'select'
                },
            ]

            guardarCampos(campos);
        }
        obtenerCampos();
    }, []);

    return (
        <CamposContext.Provider
            value={{
                campos
            }}
        >
            {props.children}
        </CamposContext.Provider>
    )
}
export default CamposProvider;