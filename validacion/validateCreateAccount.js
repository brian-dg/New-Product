export default function validateCreateAccount(values) {
    let error = {};
    //Validar el nombre del usuario
    if(!values.name) {
        error.name = "El Nombre es obligatorio"
    }

    //Validar el email
    if(!values.email) {
        error.email = "El Email es obligatorio"
    } else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ) {
        error.email = "Email no válido"
    }

    if(!values.password) { 
        error.password = "La contraseña es obligatoria"
    }else if(values.password.length < 6) {
        error.password = "La contraseña debe tener minimo de 6 caracteres"
    }

    return error;
}