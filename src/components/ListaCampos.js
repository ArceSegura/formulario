import React, { useContext, useState } from 'react';
import { CamposContext } from '../context/CamposContext';
import { FormularioContext } from '../context/FormularioContext';
import { v4 as uuidv4 } from 'uuid';

const ListaCampos = () => {
    const [camposGenerados, guardarCamposGenerado] = useState({
        name: '',
        label: '',
        tipo: '',
        cantidad: 0,
        opciones: []
    })

    const { campos } = useContext(CamposContext);
    const { guardarCampoContext } = useContext(FormularioContext);

    const obtenerCampos = e => {
        guardarCamposGenerado({
            ...camposGenerados,
            [e.target.name] : e.target.value
        })
    }

    const generarUUID = ()=>{
        guardarCamposGenerado({
            ...camposGenerados,
            name: uuidv4()
        })
    }
    let opcionesArr = []
    const obtenerOpciones = (e)=>{
        let name = e.target.name;
        
        opcionesArr[name] = e.target.value;

        guardarCamposGenerado({
            ...camposGenerados,
            ["opciones"] : opcionesArr
        })
    }

    const listarOpciones = ()=>{
        let opciones = [];
        for (let index = 0; index < camposGenerados.cantidad; index++) {
            opciones.push(
                <div className="col-md-4 mt-2" key={opciones + index}>
                    <input
                    name={index}
                    className="form-control"
                    type="text"
                    placeholder={`Opción ${index +1}`}
                    onChange={obtenerOpciones}
                    />
                </div>
            );
        }

        return opciones
    }


    return ( 
        <form
            className="col-12"
            onSubmit={ e => {
                e.preventDefault();
                generarUUID();
                guardarCampoContext(camposGenerados);
            }}
        >
            <fieldset className="text-center">
                <legend>Agrega un campo</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4 mt-2">
                    <select 
                        className="form-control"
                        name="tipo"
                        onChange={obtenerCampos}
                    >
                        <option value="">-- Selecciona un tipo de campo --</option>
                        {campos.map(campo => (
                            <option 
                                key={campo.id} 
                                value={campo.nombre} 
                            >{campo.nombre}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4 mt-2">
                    <input
                        name="label"
                        className="form-control"
                        type="text"
                        placeholder="Etiqueta del campo"
                        onChange={obtenerCampos}
                    />
                </div>

                {
                    camposGenerados.tipo != 'text' && camposGenerados.tipo != ''? 
                    <div className="col-md-4 mt-2">
                        <input
                            name="cantidad"
                            className="form-control"
                            type="number"
                            placeholder="Cantidad de opciones"
                            onChange={obtenerCampos}
                        />
                    </div>
                    :
                    null
                }
                
                {
                    listarOpciones()
                }


                <div className="col-md-4 mt-2">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Agregar campo"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default ListaCampos;