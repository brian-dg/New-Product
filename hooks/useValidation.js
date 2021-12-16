

import React, { useState, useEffect } from 'react';

const useValidacion = (stateInicial,validate,fn) => {

    const [ values,saveValues ] = useState(stateInicial);
    const [error,saveError ] = useState({});
    const [ submitForm,saveSubmitForm ] = useState(false);

    useEffect(() => {
        if(submitForm) {
            const noErrores = Object.keys(error).length === 0;

            if(noErrores) {
                fn(); // Fn = Función que se ejecuta en el componente
            }
            saveSubmitForm(false);
        }
    }, [error]);

    // Función que se ejecuta conforme el usuario escribe algo
    const handleChange = e => {
        saveValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    // Función que se ejecuta cuando el usuario hace submit
    const handleSubmit = e => {
        e.preventDefault();
        const erroresValidacion = validate(values);
        saveError(erroresValidacion);
        saveSubmitForm(true);
    }

    //Evento funcion blur 
    const handleBlur = e => {
        const erroresValidacion = validate(values);
        saveError(erroresValidacion);

    }


    return {
        values, 
        error, 
        handleSubmit,
        handleChange,
        handleBlur
    }
}
 
export default useValidacion;