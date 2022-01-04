import React,{useState,useContext}from 'react';
import Layout from '../components/layout/Layout';
import Router, {useRouter} from 'next/router';
import FileUploader from 'react-firebase-file-uploader';
import useValidation from '../hooks/useValidation';
import validateCreateProduct from '../validacion/validateCreateProduct';
import {FirebaseContext} from '../firebase';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import Error404 from '../components/layout/404';

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
    creado: Date.now(),
    creador: {
      id: user.uid,
      name: user.displayName
    },
    haVotado:[],
    
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

  if(!user) return 
return (
    <div>
      <Layout>
        {!user ? <Error404/> : (
            <>
            <div className="col-12 text-center">  
              
              <h1 className='mb-5'>Nuevo producto</h1>
              <div className="d-flex justify-content-center align-items-center container  ">
    
                  <form onSubmit={handleSubmit} className="col-6 form-horizontal">
    
                  <fieldset>
                    <legend>Informacion</legend>
                    
                      <div className="form-group row m-2">
                        <label htmlFor="nombre" className="col-sm-2 col-form-label ">Nombre</label>
                        <div className="col-sm-10">
                          <input
                              type="text"
                              id="name"
                              name="name"
                              className="form-control"
                              placeholder="Nombre del producto"
                              value={name}
                              onChange={handleChange}
                              onBlur={handleBlur}                       
                            />                      
                              {errors.name && <div className="alert-danger my-2 py-2" role="alert"> {errors.name} </div>}
                          
                        </div>
                      </div>
    
                      <div className="form-group row m-2">
                        <label htmlFor="empresa" className="col-sm-2 col-form-label ">Empresa</label>
                        <div className="col-sm-10">
                          <input
                              type="text"
                              id="empresa"
                              name="empresa"
                              className="form-control"
                              placeholder="Nombre de empresa o compañia"
                              value={empresa}
                              onChange={handleChange}
                              onBlur={handleBlur}                       
                            />                      
                              {errors.empresa && <div className="alert-danger my-2 py-2" role="alert"> {errors.empresa} </div>}                    
                        </div>
                      </div>
                      
                      
                      <div className="form-group row m-2">
                        <label htmlFor="empresa" className="col-sm-2 col-form-label ">Imagen</label>
                        <div className="col-sm-10">
                          <FileUploader
                              accept="image/*"
                              id="imagen"
                              name="imagen"
                              className="form-control"
                              randomizeFilename
                              storageRef={firebase.storage.ref("product")}
                              onUploadStart={handleUploadStart}
                              onUploadError={handleUploadError}
                              onUploadSuccess={handleUploadSuccess}
                              onProgress={handleProgress}                       
                            />                      
                              {errors.imagen && <div className="alert-danger my-2 py-2" role="alert"> {errors.imagen} </div>}                    
                        </div>
                      </div>
    
                      <div className="form-group row m-2">
                        <label htmlFor="url" className="col-sm-2 col-form-label ">URL</label>
                        <div className="col-sm-10">
                          <input
                              type="url"
                              id="url"
                              name="url"
                              className="form-control"
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
    
                    <div className="form-group row m-2">
                        <label htmlFor="descripcion" className="col-sm-2 col-form-label ">Descripcion</label>
                        <div className="col-sm-10">
                          <textarea                          
                              id="descripcion"
                              name="descripcion"
                              className="form-control"
                              value={descripcion}
                              onChange={handleChange}
                              onBlur={handleBlur}                       
                            />                      
                              {errors.descripcion && <div className="alert-danger my-2 py-2" role="alert"> {errors.descripcion} </div>}                    
                        </div>
                      </div>
    
                  </fieldset>
    
    
                    {error && <div className="alert-danger mt-3 pl-2 pl-2" role="alert"> {error} </div>}
    
                    <input type="submit" className="mt-3 col-11 text-center btn btn-danger" value="Crear producto" />
                  
                  </form>            
              </div>
            </div>
            </>
        )}
        
      </Layout>
    </div>
  )
}
export default NewProducts; 