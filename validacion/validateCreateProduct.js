export default function validateCreateProduct(values) {

    let error = {};

    // Validar el nombre del usuario
    if(!values.name) {
        error.name = "El Nombre es obligatorio";
    }

    // validar empresa
    if(!values.empresa) {
        error.empresa = "Nombre de Empresa es obligatorio"
    }
    
    // validar la url
    if(!values.url) {
        error.url = 'La URL del producto es obligatoria';
    } else if( !/^(ftp|http|https):\/\/[^ "]+$/.test(values.url) ) {
        error.url = "URL mal formateada o no válida"
    }

    // validar descripción.
    if(!values.descripcion) {
        error.descripcion = "Agrega una descripción de tu producto"
    }


    return error;
}