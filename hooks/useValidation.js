import React, {useState, useEffect} from 'react';



const useValidation= (stateInicial,validar,fn) => {

    const [values,saveValues] = useState(stateInicial);
    const [error,saveError] = useState({});
    const [submitForm,saveSubmitForm] = useState(false);

    useEffect (() =>{
        if(submitForm) {
            const noError = Object.keys(error).length === 0;
            
            if(noError){
                fn(); // fn = Ejecuta la funcion
            }
            saveSubmitForm(false);
        }
    }, [] );

    return (
        <h1>validacion</h1>
    );
}

export default useValidation;