import React, { useContext, useState } from 'react';
import { FormularioContext } from '../context/FormularioContext';
import InputText from './InputText'
import InputSelect from './InputSelect'

const Formulario = () => {


    const { formulario } = useContext(FormularioContext);

    const tipoInput = (item)=>{
        if(item.tipo == "text"){
            return <InputText key={item.name}  config = {item} />
        }else if(item.tipo == "select"){
            return <InputSelect key={item.name}  config = {item}/>
        }
    }

    return ( 
        <form
            className="col-12"
        >
            <fieldset className="text-center">
                <legend>Formulario generado</legend>
            </fieldset>

            <div className="row mt-4">
                {
                    formulario.map(item =>(
                        
                        tipoInput(item)
                    ))
                }
            </div>
        </form>
     );
}
 
export default Formulario;