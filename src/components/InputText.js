import React from 'react';

const InputText = ({config}) => {
    return ( 
            <div className="col-md-4 mt-2">
                <input
                    name={config.name}
                    className="form-control"
                    type="text"
                    placeholder={config.label}
                />
            </div>
     );
}
 
export default InputText;