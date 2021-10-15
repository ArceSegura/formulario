import React from 'react';

const InputSelect = ({config}) => {
    return ( 
        <div className="col-md-4 mt-2">
            <select 
                className="form-control"
                name={config.name}
            >
                <option value="">-- Selecciona un valor --</option>
                {config.opciones.map((opcion, key) => (
                    <option 
                        key={`opcion${key}`} 
                        value={opcion} 
                    >{opcion}</option>
                ))}
            </select>
        </div>
     );
}
 
export default InputSelect;