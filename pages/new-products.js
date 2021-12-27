import React,{useState,useContext}from 'react';
import Layout from '../components/layout/Layout';
import Router, {useRouter} from 'next/router';
import FileUploader from 'react-firebase-file-uploader';
import useValidation from '../hooks/useValidation';
import validateCreateProduct from '../validacion/validateCreateProduct';
import {FirebaseContext} from '../firebase';


const STATE_INICIAL = {
  name: '',
  empresa: '',
  imagen: '',
  url: '',
  descripcion: ''
}

const NewProducts = () =>  {

  //State de imagenes 
  const [nameImage, saveNameImage ] = useState('');
  const [upload,saveUpload] = useState(false);
  const [progreso,saveProgreso] = useState(0);
  const [urlImage,saveUrlImage] = useState('');

    const [error, saveError] = useState(false);

  const {values,errors,handleSubmit,handleChange,handleBlur} = useValidation
  (STATE_INICIAL,validateCreateProduct,createProduct);
  
  const {name,empresa,imagen,url,descripcion} = values;

  //hook de routing para redireccionar
  const router = useRouter();
  //Context con las operaciones crud de firebase 
  const {user,firebase} = useContext(FirebaseContext);

  async function createProduct()  {
  //si el usuario no esta mas autenticado llevar al login
  if(!user) {
    return router.push('/login')
  } 
  const product = {
    name,
    empresa,
    url,
    urlImage,
    descripcion,
    votos: 0,
    comentarios: [],
    creado: Date.now()
  }

  //Insertar en la base de datos 
  firebase.db.collection('productos').add(product);
  return router.push('/');
};


  const handleUploadStart = () => {
    saveProgreso(0);
    saveUpload(true);
  }

  const handleProgress = progreso => saveProgreso({ progreso });

  const handleUploadError = error => {
    saveUpload(error);
    console.error(error);
  };

  const handleUploadSuccess = nombre => {
    saveProgreso(100);
    saveUpload(false);
    saveNameImage(nombre)
    firebase
        .storage
        .ref("product")
        .child(nombre)
        .getDownloadURL()
        .then(url => {
          console.log(url);
          saveUrlImage(url);
        } );
  };
return (
    <div>
      <Layout>
        <>
        <div className="col-12 text-center">  
          
          <h1 className='mb-5'>Nuevo producto</h1>
          <div class="d-flex justify-content-center align-items-center container  ">

              <form onSubmit={handleSubmit} className="col-6 form-horizontal">

              <fieldset>
                <legend>Informacion</legend>
                
                  <div class="form-group row m-2">
                    <label htmlFor="nombre" class="col-sm-2 col-form-label ">Nombre</label>
                    <div class="col-sm-10">
                      <input
                          type="text"
                          id="name"
                          name="name"
                          class="form-control"
                          placeholder="Tu Nombre"
                          value={name}
                          onChange={handleChange}
                          onBlur={handleBlur}                       
                        />                      
                          {errors.name && <div class="alert-danger my-2 py-2" role="alert"> {errors.name} </div>}
                      
                    </div>
                  </div>

                  <div class="form-group row m-2">
                    <label htmlFor="empresa" class="col-sm-2 col-form-label ">Empresa</label>
                    <div class="col-sm-10">
                      <input
                          type="text"
                          id="empresa"
                          name="empresa"
                          class="form-control"
                          placeholder="Nombre de empresa o compañia"
                          value={empresa}
                          onChange={handleChange}
                          onBlur={handleBlur}                       
                        />                      
                          {errors.empresa && <div class="alert-danger my-2 py-2" role="alert"> {errors.empresa} </div>}                    
                    </div>
                  </div>
                  
                  
                  <div class="form-group row m-2">
                    <label htmlFor="empresa" class="col-sm-2 col-form-label ">Imagen</label>
                    <div class="col-sm-10">
                      <FileUploader
                          accept="image/*"
                          id="imagen"
                          name="imagen"
                          class="form-control"
                          randomizeFilename
                          storageRef={firebase.storage.ref("product")}
                          onUploadStart={handleUploadStart}
                          onUploadError={handleUploadError}
                          onUploadSuccess={handleUploadSuccess}
                          onProgress={handleProgress}                       
                        />                      
                          {errors.imagen && <div class="alert-danger my-2 py-2" role="alert"> {errors.imagen} </div>}                    
                    </div>
                  </div>

                  <div class="form-group row m-2">
                    <label htmlFor="url" class="col-sm-2 col-form-label ">URL</label>
                    <div class="col-sm-10">
                      <input
                          type="url"
                          id="url"
                          name="url"
                          class="form-control"
                          value={url}
                          placeholder='URL del producto'
                          onChange={handleChange}
                          onBlur={handleBlur}                       
                        />                      
                          {errors.url && <div class="alert-danger my-2 py-2" role="alert"> {errors.url} </div>}                    
                    </div>
                  </div>
              
              </fieldset>

              <fieldset>
                <legend>Sobre tu producto</legend>

                <div class="form-group row m-2">
                    <label htmlFor="descripcion" class="col-sm-2 col-form-label ">Descripcion</label>
                    <div class="col-sm-10">
                      <textarea                          
                          id="descripcion"
                          name="descripcion"
                          class="form-control"
                          value={descripcion}
                          onChange={handleChange}
                          onBlur={handleBlur}                       
                        />                      
                          {errors.descripcion && <div class="alert-danger my-2 py-2" role="alert"> {errors.descripcion} </div>}                    
                    </div>
                  </div>

              </fieldset>


                {error && <div class="alert-danger mt-3 pl-2 pl-2" role="alert"> {error} </div>}

                <input type="submit" class="mt-3 col-11 text-center btn btn-danger" value="Crear producto" />
              
              </form>            
          </div>
        </div>
        </>
      </Layout>
    </div>
  )
}
export default NewProducts; 